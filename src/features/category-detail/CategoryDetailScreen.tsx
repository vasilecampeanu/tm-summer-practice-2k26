import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScreenFrame } from "@/components/ScreenFrame";
import { colors } from "@/constants/theme";
import { useDataFetch } from "@/hooks/useDataFetch";
import {
    formatCategoryName,
    isSupportedCategory,
} from "@/features/home/components/CategoryListItem";
import { ArticleList } from "./components/ArticleList";
import type { CategoryArticlesResponse } from "./types";
import { styles } from "./CategoryDetailScreen.styles";

const CATEGORY_PRODUCTS_ENDPOINT = "https://dummyjson.com/products/category";
const CATEGORY_PRODUCTS_ERROR    = "Unable to load products for this category.";

const EMPTY_PRODUCTS_RESPONSE: CategoryArticlesResponse = {
    products: [],
    total:    0,
    skip:     0,
    limit:    0,
};

function normalizeCategoryParam(category: string | string[] | undefined) {
    return Array.isArray(category) ? category[0] : category;
}

export default function CategoryDetailScreen() {
    const router = useRouter();
    const { category: categoryParam } = useLocalSearchParams<{
        category?: string | string[];
    }>();
    const categorySlug = normalizeCategoryParam(categoryParam);
    const category     = categorySlug && isSupportedCategory(categorySlug) ? categorySlug : null;
    const categoryName = category ? formatCategoryName(category) : "Category";
    const endpoint     = category ? `${CATEGORY_PRODUCTS_ENDPOINT}/${category}` : null;

    const {
        data,
        isLoading,
        error,
    } = useDataFetch<CategoryArticlesResponse>(
        endpoint,
        EMPTY_PRODUCTS_RESPONSE,
        CATEGORY_PRODUCTS_ERROR,
    );

    return (
        <ScreenFrame
            title={categoryName}
            description={category ? "Products from DummyJSON" : undefined}
            contentContainerStyle={styles.content}
        >
            <Pressable
                accessibilityLabel="Go back"
                onPress={() => router.back()}
                style={({ hovered, pressed }) => [
                    styles.backButton,
                    hovered && styles.backButtonHovered,
                    pressed && styles.backButtonPressed,
                ]}
            >
                <ArrowLeft color={colors.text.primary} size={20} strokeWidth={2.5} />
                <Text style={styles.backButtonText}>Back</Text>
            </Pressable>
            {!category ? (
                <View style={styles.statePanel}>
                    <Text style={styles.errorText}>This category is not available.</Text>
                </View>
            ) : isLoading ? (
                <View style={styles.statePanel}>
                    <ActivityIndicator color={colors.brand.primary} />
                    <Text style={styles.stateText}>Loading products...</Text>
                </View>
            ) : error ? (
                <View style={styles.statePanel}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            ) : data.products.length === 0 ? (
                <View style={styles.statePanel}>
                    <Text style={styles.stateText}>No products found.</Text>
                </View>
            ) : (
                <ArticleList
                    articles={data.products}
                    total={data.total}
                />
            )}
        </ScreenFrame>
    );
}
