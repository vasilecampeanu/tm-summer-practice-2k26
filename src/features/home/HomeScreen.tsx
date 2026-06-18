import { useCallback, useEffect, useRef, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import {
    Armchair,
    ChevronRight,
    CookingPot,
    Droplets,
    Dumbbell,
    Gem,
    Glasses,
    Handbag,
    Headphones,
    Lamp,
    Laptop,
    type LucideIcon,
    Smartphone,
    SportShoe,
    Shirt,
    ShoppingBasket,
    Sparkles,
    SprayCan,
    Watch,
} from "lucide-react-native";
import { ScreenFrame } from "@/components/ScreenFrame";
import { CATEGORY_ACCENTS, colors } from "@/constants/theme";
import { styles } from "./HomeScreen.styles";

const CATEGORIES_ENDPOINT    = "https://dummyjson.com/products/category-list";
const CATEGORY_ERROR_MESSAGE = "Unable to load article categories.";

const SUPPORTED_CATEGORIES = {
    beauty:                Sparkles,
    fragrances:            SprayCan,
    furniture:             Armchair,
    groceries:             ShoppingBasket,
    "home-decoration":     Lamp,
    "kitchen-accessories": CookingPot,
    laptops:               Laptop,
    "mens-shirts":         Shirt,
    "mens-shoes":          SportShoe,
    "mens-watches":        Watch,
    "mobile-accessories":  Headphones,
    "skin-care":           Droplets,
    smartphones:           Smartphone,
    "sports-accessories":  Dumbbell,
    sunglasses:            Glasses,
    "womens-bags":         Handbag,
    "womens-jewellery":    Gem,
} satisfies Record<string, LucideIcon>;

type SupportedCategory = keyof typeof SUPPORTED_CATEGORIES;

function formatCategoryName(category: string) {
    return category
        .replace(/-/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getCategoryStyle(category: SupportedCategory, index: number) {
    return {
        ...CATEGORY_ACCENTS[index % CATEGORY_ACCENTS.length],
        icon: SUPPORTED_CATEGORIES[category],
    };
}

function isSupportedCategory(category: string): category is SupportedCategory {
    return Object.prototype.hasOwnProperty.call(SUPPORTED_CATEGORIES, category);
}

export default function HomeScreen() {
    const [categories, setCategories] = useState<SupportedCategory[]>([]);
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

            const payloadCategories = payload.filter(
                (category): category is string => typeof category === "string",
            );

            if (payloadCategories.length !== payload.length) {
                throw new Error("Categories response contains invalid items");
            }

            const nextCategories = payloadCategories.filter(isSupportedCategory);

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
            description="Find something you'll love today"
            contentContainerStyle={contentStyle}
        >
            {isLoading ? (
                <>
                    <ActivityIndicator color={colors.brand.primary} />
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
                    categories.map((category, index) => {
                        const categoryStyle = getCategoryStyle(category, index);
                        const CategoryIcon  = categoryStyle.icon;

                        return (
                            <Pressable
                                key={category}
                                style={({ hovered, pressed }) => [
                                    styles.categoryRow,
                                    hovered && styles.categoryRowHovered,
                                    pressed && styles.categoryRowPressed,
                                ]}
                            >
                                <View
                                    style={[
                                        styles.categoryIconBadge,
                                        { backgroundColor: categoryStyle.backgroundColor },
                                    ]}
                                >
                                    <CategoryIcon
                                        color={categoryStyle.color}
                                        size={24}
                                        strokeWidth={2.4}
                                    />
                                </View>
                                <Text numberOfLines={1} style={styles.categoryName}>
                                    {formatCategoryName(category)}
                                </Text>
                                <ChevronRight color={colors.icon.muted} size={24} strokeWidth={2.5} />
                            </Pressable>
                        );
                    })
                ) : (
                    <Text style={styles.stateText}>No supported categories found.</Text>
                )
            )}
        </ScreenFrame>
    );
}
