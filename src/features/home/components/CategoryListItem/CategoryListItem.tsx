import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { colors } from "@/constants/theme";
import {
    formatCategoryName,
    getCategoryStyle,
    type SupportedCategory,
} from "./CategoryListItem.helpers";
import { styles } from "./CategoryListItem.styles";

type CategoryListItemProps = {
    category: SupportedCategory;
    index: number;
};

export function CategoryListItem({ category, index }: CategoryListItemProps) {
    const router        = useRouter();
    const categoryStyle = getCategoryStyle(category, index);
    const CategoryIcon  = categoryStyle.icon;

    return (
        <Pressable
            accessibilityLabel={`Open ${formatCategoryName(category)} category`}
            onPress={() => router.push(`./${category}`, { relativeToDirectory: true })}
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
