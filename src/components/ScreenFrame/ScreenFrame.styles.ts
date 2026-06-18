import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8fafc",
    },
    title: {
        position: "absolute",
        left: 24,
        zIndex: 1,
        color: "#111827",
        fontSize: 48,
        fontWeight: "800",
        letterSpacing: 0,
    },
    content: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingBottom: 0,
    },
});
