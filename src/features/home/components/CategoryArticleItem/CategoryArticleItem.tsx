import { Pressable, Text, View } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { colors } from "@/constants/theme";
import {
    formatCategoryName,
    getCategoryStyle,
    type SupportedCategory,
} from "./CategoryArticleItem.helpers";
import { styles } from "./CategoryArticleItem.styles";

type CategoryArticleItemProps = {
    category: SupportedCategory;
    index: number;
};

export function CategoryArticleItem({ category, index }: CategoryArticleItemProps) {
    const categoryStyle = getCategoryStyle(category, index);
    const CategoryIcon  = categoryStyle.icon;

    return (
        <Pressable
            style={({ hovered, pressed }) => [
                styles.row,
                hovered && styles.rowHovered,
                pressed && styles.rowPressed,
            ]}
        >
            <View
                style={[
                    styles.iconBadge,
                    { backgroundColor: categoryStyle.backgroundColor },
                ]}
            >
                <CategoryIcon
                    color={categoryStyle.color}
                    size={24}
                    strokeWidth={2.4}
                />
            </View>
            <Text numberOfLines={1} style={styles.name}>
                {formatCategoryName(category)}
            </Text>
            <ChevronRight color={colors.icon.muted} size={24} strokeWidth={2.5} />
        </Pressable>
    );
}
