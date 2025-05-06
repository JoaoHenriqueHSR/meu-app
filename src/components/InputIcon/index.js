import { View, TextInput, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./style.js";

export default function InputIcon({label, placeholder, icone, value, onChangeText}){
    return(
        <View>
            <Text>
                {label}
            </Text>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={"#5b5b5c"} value={value} onChangeText={onChangeText}/>
                <Icon style={styles.icon} name={icone} size={24} color="#000"/>
            </View>
        </View>
    );
}