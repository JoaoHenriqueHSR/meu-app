import { View, TextInput, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./style.js";

export default function InputButton({label, placeholder, icon, value, onChangeText, onPressSend, onPressAnex}){
    return(
        <View style={styles.container}>
            <Text>
                {label}
            </Text>
            <View style={styles.containerInputButton}>
                <View style={styles.containerInput}>
                    <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={"#5b5b5c"} value={value} onChangeText={onChangeText}/>
                    <TouchableOpacity onPress={onPressSend}>
                        <Icon style={styles.icon} name={icon} size={24} color="#000"/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.bntImage} onPress={onPressAnex}>
                    <Text style={styles.anxImg}>
                        Anexar imagem
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}