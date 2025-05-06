import { TouchableOpacity, Text } from "react-native";
import styles from "./style.js";


export default function ButtonCalc({num}){
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
                {num}
            </Text>
        </TouchableOpacity>
    );
}