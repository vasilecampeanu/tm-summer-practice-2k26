import { Text, View } from "react-native";

import { styles } from "./basket.styles";

export default function BasketScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.eyebrow}>Basket</Text>
            <Text style={styles.message}>Your shopping cart is empty</Text>
        </View>
    );
}
