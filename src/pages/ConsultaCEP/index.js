import { View} from "react-native";
import styles from "./style";
import Input from "../../components/InputIcon";
import ButtonSmall from "../../components/ButtonSmall";
import { useState } from "react";
import api from "../../services/ViaCep";

export default function ConsultaCEP(){
    const[CEP, setCEP]=useState("");
    const[logradouro, setLogradouro]=useState("");
    const[bairro, setBairro]=useState("");
    const[cidade, setCidade]=useState("");
    const[estado, setEstado]=useState("");

    async function buscarCep(){
        let resposta = await api.get(CEP+"/json");
        setLogradouro(resposta.data.logradouro);
        setBairro(resposta.data.bairro);
        setCidade(resposta.data.localidade);
        setEstado(resposta.data.uf);
    }
    return(
        <View style={styles.container}>
            <View style={styles.containerCEP}>
                <Input placeholder={"Informe seu CEP"} value={CEP} onChangeText={(text)=> setCEP(text)}/>
                <ButtonSmall text={"Buscar"} onPress={buscarCep}/>
            </View>
            <View style={styles.containerInputs}>
                <Input placeholder={"Logradouro"} value={logradouro} onChangeText={(text)=>setLogradouro(text)}/>
                <Input placeholder={"Bairro"} value={bairro} onChangeText={(text)=>setBairro(text)}/>
                <Input placeholder={"Cidade"} value={cidade} onChangeText={(text)=>setCidade(text)}/>
                <Input placeholder={"Estado"} value={estado} onChangeText={(text)=>setEstado(text)}/>
            </View>
        </View>
    );
}