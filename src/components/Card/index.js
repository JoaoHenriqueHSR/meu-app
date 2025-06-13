import { View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import styles from "./style";


export default function Card({texto, image}){
    const[corIcon, setCorIcon]=useState("#000");
    const[icone, setIcone]=useState("hearto");
    
    function click(){
        setCorIcon(corIcon=="#000"?"#ff0000":"#000");
        setIcone(icone=="hearto"?"heart":"hearto");
    }

    return(
        <View style={styles.container}>
            <Image source={image} style={styles.img} />
            <View style={styles.inputDesc}>
                <Text>{texto}</Text>
                <TouchableOpacity onPress={click}>
                    <Icon style={styles.icon} name={icone} size={24} color={corIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};