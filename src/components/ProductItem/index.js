import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./style.js"

export default function ProdutcItem({item, onPressEdit, onPressRemove}){
    return(
        <View style={styles.container}>
            <View style={styles.text}>
                <Text>
                    {item}
                </Text>
            </View>
            <View style={styles.icons}>
                <TouchableOpacity onPress={onPressEdit}>
                    <Icon style={styles.icon} name={"edit"} size={24} color="#000"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressRemove}>
                    <Icon style={styles.icon} name={"trash"} size={24} color="#f00"/>
                </TouchableOpacity>
            </View>
        </View>
    );
};