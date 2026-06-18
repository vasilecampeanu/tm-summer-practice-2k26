import { NativeTabs } from "expo-router/unstable-native-tabs";
import { DynamicColorIOS, Platform, type ColorValue } from "react-native";

const adaptiveTintColor: ColorValue =
    Platform.OS === "ios" && typeof DynamicColorIOS === "function"
        ? DynamicColorIOS({
              dark: "#ffffff",
              light: "#0f172a",
          })
        : "#0f172a";

export default function TabLayout() {
    return (
        <NativeTabs
            blurEffect="systemDefault"
            labelStyle={{ color: adaptiveTintColor }}
            tintColor={adaptiveTintColor}
        >
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
