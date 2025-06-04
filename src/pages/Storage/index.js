import { View, Image } from "react-native";
import ButtonLarger from "../../components/ButtonLarge";
import InputPassword from "../../components/InputPassword";
import InputIcon from "../../components/InputIcon";
import styles from "./style";
import { useState } from "react";


export default function Storage({navigation}){
    const [nome, setNome]=useState("");

    
    function AddImage(){
        navigation.navigate("StorageImage", {nome});
    }
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/image/Avatar-Loak.jpg')} style={styles.img} />
            <InputIcon label="Login:" placeholder="Nome" icone="user" onChangeText={(text)=>{setNome(text)}}/>
            <InputPassword placeholder="Informe sua senha" label="Senha:"/>
            <ButtonLarger text="Entrar" onPress={AddImage}/>
            <ButtonLarger text="Entrar com Google" onPress={AddImage}/>
        </View>
    );
};