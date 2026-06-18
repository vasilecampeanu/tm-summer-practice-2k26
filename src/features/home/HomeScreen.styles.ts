import { StyleSheet } from "react-native";
import { colors } from "@/constants/theme";

export const styles = StyleSheet.create({
    categoryList: {
        gap: 14,
        paddingBottom: 96,
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
});
