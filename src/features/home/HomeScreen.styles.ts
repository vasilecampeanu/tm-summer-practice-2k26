import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    categoryList: {
        gap: 12,
        paddingBottom: 0,
    },
    categoryRow: {
        minHeight: 56,
        justifyContent: "center",
        backgroundColor: "#ffffff",
        borderColor: "#e2e8f0",
        borderRadius: 8,
        borderWidth: 1,
        paddingHorizontal: 16,
    },
    categoryName: {
        color: "#111827",
        fontSize: 16,
        fontWeight: "600",
        textTransform: "capitalize",
    },
    stateContent: {
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
    },
    stateText: {
        color: "#475569",
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center",
    },
    errorText: {
        color: "#b91c1c",
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center",
    },
    retryButton: {
        backgroundColor: "#2563eb",
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    retryButtonText: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "700",
    },
});
