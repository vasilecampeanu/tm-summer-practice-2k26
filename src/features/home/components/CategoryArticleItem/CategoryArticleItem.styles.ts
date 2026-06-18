import { StyleSheet } from "react-native";
import { colors } from "@/constants/theme";

export const styles = StyleSheet.create({
    row: {
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
    rowHovered: {
        borderColor: colors.border.hover,
        shadowOpacity: 0.14,
        shadowRadius: 24,
        transform: [{ translateY: -2 }],
    },
    rowPressed: {
        opacity: 0.86,
        transform: [{ scale: 0.99 }],
    },
    iconBadge: {
        width: 52,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        borderColor: colors.border.inverseSubtle,
        borderRadius: 26,
        borderWidth: 4,
    },
    name: {
        flex: 1,
        color: colors.text.primary,
        fontSize: 17,
        fontWeight: "800",
    },
});
