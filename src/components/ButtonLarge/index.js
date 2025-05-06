import { TouchableOpacity, Text } from "react-native";
import styles from "./style.js";

export default function ButtonLarger({text, onPress}){
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};