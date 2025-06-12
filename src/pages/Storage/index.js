import { View, Image } from "react-native";
import ButtonLarger from "../../components/ButtonLarge";
import InputPassword from "../../components/InputPassword";
import InputIcon from "../../components/InputIcon";
import styles from "./style";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";


export default function Storage({navigation}){
    const [usuario, setUsuario]=useState("");
    const [senha, setSenha]=useState();

    async function criarUsuario(){
        let user;
        user=await createUserWithEmailAndPassword(auth, "email@email.com", "123456");
        console.log(user);
    }

    async function login(){
        let user=await signInWithEmailAndPassword(auth, usuario, senha);
        if(user.user){
             navigation.navigate("StorageImage", {usuario});
        }
    }

    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/image/Avatar-Loak.jpg')} style={styles.img} />
            <InputIcon label="Login:" placeholder="Nome" icone="user" onChangeText={(text)=>{setUsuario(text)}}/>
            <InputPassword placeholder="Informe sua senha" label="Senha:" onChangeText={(text)=>{setSenha(text)}}/>
            <ButtonLarger text="Entrar" onPress={login}/>
            <ButtonLarger text="Entrar com Google"/>
        </View>
    );
};