import { ActivityIndicator, Text } from "react-native";
import { ScreenFrame } from "@/components/ScreenFrame";
import { colors } from "@/constants/theme";
import { useDataFetch } from "@/hooks/useDataFetch";
import { CategoryList } from "./components/CategoryList";
import { isSupportedCategory } from "./components/CategoryListItem";
import { styles } from "./HomeScreen.styles";

const CATEGORIES_ENDPOINT        = "https://dummyjson.com/products/category-list";
const CATEGORY_ERROR_MESSAGE     = "Unable to load article categories.";
const EMPTY_CATEGORIES: string[] = [];

export default function HomeScreen() {
    const {
        data: categoryNames,
        isLoading,
        error,
    } = useDataFetch<string[]>(CATEGORIES_ENDPOINT, EMPTY_CATEGORIES, CATEGORY_ERROR_MESSAGE);

    const categories = categoryNames.filter(isSupportedCategory);

    return (
        <ScreenFrame 
            title="Home" 
            description="Find something you'll love today"
            contentContainerStyle={isLoading || error ? styles.stateContent : styles.categoryList}
        >
            {isLoading ? (
                <>
                    <ActivityIndicator color={colors.brand.primary} />
                    <Text style={styles.stateText}>Loading categories...</Text>
                </>
            ) : error ? (
                <>
                    <Text style={styles.errorText}>{error}</Text>
                </>
            ) : (
                <CategoryList categories={categories} />
            )}
        </ScreenFrame>
    );
}
