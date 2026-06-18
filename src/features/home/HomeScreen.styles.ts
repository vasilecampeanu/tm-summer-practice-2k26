import { StyleSheet } from "react-native";
import { colors } from "@/constants/theme";

export const styles = StyleSheet.create({
    categoryList: {
        gap: 14,
        paddingBottom: 96,
    },
    categoryRow: {
        minHeight: 72,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        backgroundColor: colors.surface.default,
        borderColor: colors.border.default,
        borderRadius: 999,
        borderWidth: 1,
        paddingHorizontal: 18,
        paddingVertical: 10,
        shadowColor: colors.shadow.default,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.08,
        shadowRadius: 18,
        elevation: 2,
    },
    categoryRowHovered: {
        borderColor: colors.border.hover,
        shadowOpacity: 0.14,
        shadowRadius: 24,
        transform: [{ translateY: -2 }],
    },
    categoryRowPressed: {
        opacity: 0.86,
        transform: [{ scale: 0.99 }],
    },
    categoryIconBadge: {
        width: 52,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        borderColor: colors.border.inverseSubtle,
        borderRadius: 26,
        borderWidth: 4,
    },
    categoryName: {
        flex: 1,
        color: colors.text.primary,
        fontSize: 17,
        fontWeight: "800",
    },
    stateContent: {
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
    },
    stateText: {
        color: colors.text.secondary,
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center",
    },
    errorText: {
        color: colors.feedback.danger,
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
    },
    retryButton: {
        backgroundColor: colors.brand.primary,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    retryButtonText: {
        color: colors.text.inverse,
        fontSize: 15,
        fontWeight: "700",
    },
});
