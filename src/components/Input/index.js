import { View, TextInput, Text } from "react-native";
import styles from "./style.js";

export default function InputIcon({label, placeholder, value, onChangeText}){
    return(
        <View>
            <Text>
                {label}
            </Text>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={"#5b5b5c"} value={value} onChangeText={onChangeText}/>
            </View>
        </View>
    );
}