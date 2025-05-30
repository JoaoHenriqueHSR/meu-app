import { View, Image, Text } from "react-native";
import styles from "./style";
import InputButton from "../../components/InputButton";
import Card from "../../components/Card";

export default function StorageImage({route}){
    console.log(route)
    const {nome}=route.params;

    return(
        <View style={styles.container}>
            <Text>Olá {nome}</Text>
            <InputButton placeholder={"Sobre a imagem..."} icon={"send"}/>
            <Card texto={"Texto sobre a imagem"} icon={"heart"}/>
        </View>
    );
};