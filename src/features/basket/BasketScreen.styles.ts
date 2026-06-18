import { StyleSheet } from "react-native";
import { colors } from "@/constants/theme";

export const styles = StyleSheet.create({
    content: {
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 120,
    },
    message: {
        color: colors.text.strong,
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
    },
});
