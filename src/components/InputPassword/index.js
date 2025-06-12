import { TextInput, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styles from "./style.js"
import { useState } from "react";

export default function InputPassword({ placeholder, label, onChangeText}){

    const [icone, setIcone]=useState("eye-off");
    const [text, setText]=useState(true);

    const passWord=()=>{
        if(icone=="eye"){
            setIcone("eye-off");
            setText(true);
        }else{
            setIcone("eye");
            setText(false);
        };
    };
    return(
        <View style={styles.container}>
            <Text>{label}</Text>
            <View style={styles.containerInput}>
                <TextInput style={styles.input} secureTextEntry={text} placeholder={placeholder} placeholderTextColor={"#5b5b5c"} onChangeText={onChangeText}/>
                <TouchableOpacity onPress={passWord}>
                    <Icon style={styles.icon} name={icone} size={24} color="#000"/>
                </TouchableOpacity>
            </View>
        </View>
    );
};