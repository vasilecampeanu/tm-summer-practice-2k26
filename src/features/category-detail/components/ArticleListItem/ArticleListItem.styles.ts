import { StyleSheet } from "react-native";
import { colors } from "@/constants/theme";

export const styles = StyleSheet.create({
    card: {
        minHeight: 128,
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
        backgroundColor: colors.surface.default,
        borderColor: colors.border.default,
        borderRadius: 34,
        borderWidth: 1,
        padding: 14,
        shadowColor: colors.shadow.default,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.08,
        shadowRadius: 18,
        elevation: 2,
    },
    imageFrame: {
        width: 96,
        height: 96,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: colors.background.default,
        borderColor: colors.border.inverseSubtle,
        borderRadius: 30,
        borderWidth: 4,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    content: {
        flex: 1,
        minWidth: 0,
        gap: 8,
    },
    header: {
        gap: 6,
    },
    title: {
        color: colors.text.primary,
        fontSize: 16,
        fontWeight: "800",
        lineHeight: 20,
    },
    price: {
        color: colors.brand.primary,
        fontSize: 15,
        fontWeight: "800",
    },
    description: {
        color: colors.text.secondary,
        fontSize: 13,
        fontWeight: "500",
        lineHeight: 18,
    },
    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    ratingText: {
        color: colors.text.strong,
        fontSize: 13,
        fontWeight: "800",
    },
});
