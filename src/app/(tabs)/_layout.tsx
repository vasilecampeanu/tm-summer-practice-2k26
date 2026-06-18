import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabLayout() {
    return (
        <NativeTabs>
            <NativeTabs.Trigger name="home">
                <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon
                    md={{ default: "home", selected: "home_filled" }}
                    sf={{ default: "house", selected: "house.fill" }}
                />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="basket">
                <NativeTabs.Trigger.Label>Basket</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon
                    md="shopping_cart"
                    sf={{ default: "cart", selected: "cart.fill" }}
                />
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}
