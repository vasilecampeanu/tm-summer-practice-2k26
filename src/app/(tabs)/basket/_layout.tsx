import { Stack } from "expo-router";

export default function BasketLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: "Basket" }} />
        </Stack>
    );
}
