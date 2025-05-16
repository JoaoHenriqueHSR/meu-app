import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import styles from "./style.js"

export default function RotinaItem({titulo, desc, status, onPressCheck, name}){
    return(
        <View style={styles.container}>
            <View style={styles.text}>
                <Text>
                    Titulo:{titulo}
                </Text>
                <Text>
                    Descrição:{desc}
                </Text>
                <Text>
                    Status:{status}
                </Text>
            </View>
            <View style={styles.icons}>
                <TouchableOpacity onPress={onPressCheck}>
                    <Icon style={styles.icon} name={name} size={24} color="#000"/>
                </TouchableOpacity>
            </View>
        </View>
    );
};