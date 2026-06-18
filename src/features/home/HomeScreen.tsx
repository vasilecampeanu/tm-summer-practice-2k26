import { useCallback, useEffect, useRef, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { ScreenFrame } from "@/components/ScreenFrame";
import { styles } from "./HomeScreen.styles";

const CATEGORIES_ENDPOINT    = "https://dummyjson.com/products/category-list";
const CATEGORY_ERROR_MESSAGE = "Unable to load article categories.";

function formatCategoryName(category: string) {
    return category.replace(/-/g, " ");
}

export default function HomeScreen() {
    const [categories, setCategories] = useState<string[]>([]);
    const [isLoading,  setIsLoading]  = useState(true);
    const [error, setError] = useState<string | null>(null);

    const isMountedRef = useRef(true);

    const loadCategories = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(CATEGORIES_ENDPOINT);

            if (!response.ok) {
                throw new Error(`Categories request failed with status ${response.status}`);
            }

            const payload: unknown = await response.json();

            if (!Array.isArray(payload)) {
                throw new Error("Categories response is not a list");
            }

            const nextCategories = payload.filter(
                (category): category is string => typeof category === "string",
            );

            if (nextCategories.length !== payload.length) {
                throw new Error("Categories response contains invalid items");
            }

            if (isMountedRef.current) {
                setCategories(nextCategories);
            }
        } catch (loadError) {
            console.warn(loadError);

            if (isMountedRef.current) {
                setCategories([]);
                setError(CATEGORY_ERROR_MESSAGE);
            }
        } finally {
            if (isMountedRef.current) {
                setIsLoading(false);
            }
        }
    }, []);

    useEffect(() => {
        isMountedRef.current = true;
        loadCategories();

        return () => {
            isMountedRef.current = false;
        };
    }, [loadCategories]);

    const contentStyle = isLoading || error ? styles.stateContent : styles.categoryList;

    return (
        <ScreenFrame 
            title="Home" 
            contentContainerStyle={contentStyle}
        >
            {isLoading ? (
                <>
                    <ActivityIndicator color="#2563eb" />
                    <Text style={styles.stateText}>Loading categories...</Text>
                </>
            ) : error ? (
                <>
                    <Text style={styles.errorText}>{error}</Text>
                    <Pressable style={styles.retryButton} onPress={loadCategories}>
                        <Text style={styles.retryButtonText}>Try again</Text>
                    </Pressable>
                </>
            ) : (
                categories.length > 0 ? (
                    categories.map((category) => (
                        <View key={category} style={styles.categoryRow}>
                            <Text style={styles.categoryName}>
                                {formatCategoryName(category)}
                            </Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.stateText}>No categories found.</Text>
                )
            )}
        </ScreenFrame>
    );
}
