import { View } from "react-native";
import { useState } from "react";
import RotinaItem from "../../components/RotinaItem";
import apiRotinas from "../../services/apiRotinas";
import ButtonLarger from "../../components/ButtonLarge";
import { setStatusBarTranslucent } from "expo-status-bar";

export default function Principal({navigation}){
    const [checkBox, setCheckBox]=useState("checkbox-passive");
    const [check, setCheck]=useState(false);

    async function Check(){
        if(checkBox=="checkbox-passive"&&check==false){
            setCheckBox("checkbox-active");
            setCheck(true)
            const response=await apiRotinas.put("rotinas/");//fazer a alteração do dados
        }
    }

    function cadastrar(){
        navigation.navigate("Cadastro")
    }
    return(
        <View>
            <RotinaItem name={"checkbox-passive"} titulo={"A"} desc={"d"} status={"bn"}/>
            <ButtonLarger text={"Cadastrar"} onPress={cadastrar}/>
        </View>
    );
}