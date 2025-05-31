import { View, Image, Text } from "react-native";
import styles from "./style";
import InputButton from "../../components/InputButton";
import Card from "../../components/Card";
import StorageModal from "../StorageModal";
import { useState } from "react";

export default function StorageImage({route}){
    const [modalLoading, setModalLoading]=useState(false);

    function modal(){
        setModalLoading(true);
    }
    const {nome}=route.params;

    return(
        <View style={styles.container}>
            <Text>Olá {nome}</Text>
            <InputButton placeholder={"Sobre a imagem..."} icon={"send"} onPressAnex={modal}/>
            <Card texto={"Texto sobre a imagem"} icon={"heart"}/>
            <StorageModal visible={modalLoading}/>
        </View>
    );
};