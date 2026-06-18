import { Text, View } from "react-native";

import { styles } from "./home.styles";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Hello world</Text>
        </View>
    );
}
