import { View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./style";


export default function Card({icon, texto}){
    
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/image/Avatar-Loak.jpg')} style={styles.img} />
            <View style={styles.inputDesc}>
                <Text>{texto}</Text>
                <Icon style={styles.icon} name={icon} size={24} color="#ff0000"/>
            </View>
        </View>
    );
};