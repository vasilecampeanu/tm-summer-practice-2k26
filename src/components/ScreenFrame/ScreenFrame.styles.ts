import { StyleSheet } from "react-native";
import { colors } from "@/constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.default,
    },
    header: {
        position: "absolute",
        left: 24,
        right: 24,
        zIndex: 1,
    },
    title: {
        color: colors.text.heading,
        fontSize: 48,
        fontWeight: "800",
        letterSpacing: 0,
    },
    description: {
        marginTop: 4,
        color: colors.text.muted,
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 24,
    },
    content: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingBottom: 0,
    },
});
