import { StyleSheet } from "react-native";
import { colors } from "@/constants/theme";

export const styles = StyleSheet.create({
    content: {
        gap: 16,
        paddingBottom: 96,
    },
    statePanel: {
        minHeight: 220,
        justifyContent: "center",
        alignItems: "center",
        gap: 14,
    },
    backButton: {
        alignSelf: "flex-start",
        minHeight: 52,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
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
    backButtonHovered: {
        borderColor: colors.border.hover,
        shadowOpacity: 0.14,
    },
    backButtonPressed: {
        opacity: 0.84,
        transform: [{ scale: 0.98 }],
    },
    backButtonText: {
        color: colors.text.primary,
        fontSize: 15,
        fontWeight: "800",
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
});
