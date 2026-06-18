import { Text } from "react-native";
import { ScreenFrame } from "@/components/ScreenFrame";
import { styles } from "./BasketScreen.styles";

export default function BasketScreen() {
    return (
        <ScreenFrame 
            title="Basket" 
            contentContainerStyle={styles.content}
        >
            <Text style={styles.message}>Your shopping cart is empty</Text>
        </ScreenFrame>
    );
}
