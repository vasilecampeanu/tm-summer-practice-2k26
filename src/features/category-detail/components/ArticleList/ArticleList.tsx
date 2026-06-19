import { Text } from "react-native";
import type { Article } from "../../types";
import { ArticleListItem } from "../ArticleListItem";
import { styles } from "./ArticleList.styles";

type ArticleListProps = {
    articles: Article[];
    total: number;
};

export function ArticleList({ articles, total }: ArticleListProps) {
    return (
        <>
            <Text style={styles.resultCount}>
                {total} {total === 1 ? "product" : "products"}
            </Text>
            {articles.map((article) => (
                <ArticleListItem
                    article={article}
                    key={article.id}
                />
            ))}
        </>
    );
}
