export type Article = {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    thumbnail?: string;
    images?: string[];
};

export type CategoryArticlesResponse = {
    products: Article[];
    total: number;
    skip: number;
    limit: number;
};
