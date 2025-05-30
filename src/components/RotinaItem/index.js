import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import styles from "./style.js"

export default function RotinaItem({titulo, desc, status, onPressCheck, onPressDelet, iconCheck, iconDelet}){
    function limitarString(texto){
        if(texto.length> 32){
            return texto.substring(0, 32)+"..."
        }
        return texto;
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.text}>
                    <Text style={styles.atributos}>Titulo:</Text> {limitarString(titulo)}
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.atributos}>Descrição:</Text> {limitarString(desc)}
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.atributos}>Status:</Text> {status}
                </Text>
            </View>
            <View style={styles.buttonIcon}>
                <TouchableOpacity onPress={onPressCheck}>
                    <Icon style={styles.icon} name={iconCheck} size={24} color="#000"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressDelet}>
                    <Icon style={styles.icon} name={iconDelet} size={24} color="#ff1100"/>
                </TouchableOpacity>
            </View>
        </View>
    );
};