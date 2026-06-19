import { Image, Text, View } from "react-native";
import { ImageOff, Star } from "lucide-react-native";
import { colors } from "@/constants/theme";
import type { Article } from "../../types";
import { styles } from "./ArticleListItem.styles";

type ArticleListItemProps = {
    article: Article;
};

function getArticleImage(article: Article) {
    return article.thumbnail ?? article.images?.[0] ?? null;
}

function formatArticlePrice(price: number) {
    return `$${price.toFixed(2)}`;
}

export function ArticleListItem({ article }: ArticleListItemProps) {
    const image = getArticleImage(article);

    return (
        <View style={styles.card}>
            <View style={styles.imageFrame}>
                {image ? (
                    <Image
                        source={{ uri: image }}
                        style={styles.image}
                    />
                ) : (
                    <ImageOff color={colors.icon.muted} size={28} strokeWidth={2} />
                )}
            </View>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text numberOfLines={2} style={styles.title}>
                        {article.title}
                    </Text>
                    <Text style={styles.price}>{formatArticlePrice(article.price)}</Text>
                </View>
                <Text numberOfLines={3} style={styles.description}>
                    {article.description}
                </Text>
                <View style={styles.ratingRow}>
                    <Star color={colors.brand.primary} fill={colors.brand.primary} size={16} />
                    <Text style={styles.ratingText}>{article.rating.toFixed(1)}</Text>
                </View>
            </View>
        </View>
    );
}
