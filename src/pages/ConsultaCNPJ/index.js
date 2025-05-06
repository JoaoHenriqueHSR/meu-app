import { View} from "react-native";
import styles from "./style";
import Input from "../../components/Input";
import ButtonSmall from "../../components/ButtonSmall";
import { useState } from "react";
import apiCNPJ from "../../services/BrasilApi";

export default function ConsultaCNPJ(){
    const[CNPJ, setCNPJ]=useState("");
    const[razaoSocial, setRazaoSocial]=useState("");
    const[logradouro, setLogradouro]=useState("");
    const[bairro, setBairro]=useState("");
    const[cidade, setCidade]=useState("");
    const[cnae, setCnae]=useState("");

    async function buscarCNPJ(){
        let resposta = await apiCNPJ.get(CNPJ);
        setRazaoSocial(resposta.data.razao_social);
        setLogradouro(resposta.data.logradouro);
        setBairro(resposta.data.bairro);
        setCidade(resposta.data.cep);
        setCnae(resposta.data.cnae_fiscal);
    }
    return(
        <View style={styles.container}>
            <View style={styles.containerCEP}>
                <Input placeholder={"Informe um CNPJ"} value={CNPJ} onChangeText={(text)=> setCNPJ(text)}/>
                <ButtonSmall text={"Buscar"} onPress={buscarCNPJ}/>
            </View>
            <View style={styles.containerInputs}>
                <Input placeholder={"Razão social"} value={razaoSocial} onChangeText={(text)=> setRazaoSocial(text)}/>
                <Input placeholder={"Logradouro"} value={logradouro} onChangeText={(text)=> setLogradouro(text)}/>
                <Input placeholder={"Bairro"} value={bairro} onChangeText={(text)=> setBairro(text)}/>
                <Input placeholder={"Cidade"} value={cidade} onChangeText={(text)=>setBairro(text)}/>
                <Input placeholder={"Cnae"} value={cnae} onChangeText={(text)=> setCnae(text)}/>
            </View>
        </View>
    );
}