import { Text } from "react-native";
import {
    CategoryArticleItem,
    type SupportedCategory,
} from "../CategoryArticleItem";
import { styles } from "./CategoryList.styles";

type CategoryListProps = {
    categories: SupportedCategory[];
};

export function CategoryList({ categories }: CategoryListProps) {
    if (categories.length === 0) {
        return <Text style={styles.emptyText}>No supported categories found.</Text>;
    }

    return (
        <>
            {categories.map((category, index) => (
                <CategoryArticleItem
                    key={category}
                    category={category}
                    index={index}
                />
            ))}
        </>
    );
}
