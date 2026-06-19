import {
    Armchair,
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
import { CATEGORY_ACCENTS } from "@/constants/theme";

const CATEGORY_ICONS = {
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

export type SupportedCategory = keyof typeof CATEGORY_ICONS;

export function getCategoryStyle(category: SupportedCategory, index: number) {
    return {
        ...CATEGORY_ACCENTS[index % CATEGORY_ACCENTS.length],
        icon: CATEGORY_ICONS[category],
    };
}

export function isSupportedCategory(category: string): category is SupportedCategory {
    return Object.prototype.hasOwnProperty.call(CATEGORY_ICONS, category);
}

export function formatCategoryName(category: string) {
    return category
        .replace(/-/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
}
