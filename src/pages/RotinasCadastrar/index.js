import { View } from "react-native";
import styles from "./style";
import Input from "../../components/Input";
import ButtonLarger from "../../components/ButtonLarge";
import { useState } from "react";
import LoadingModal from "../LoadingModal";
import apiRotinas from "../../services/apiRotinas";

export default function RotinaCadastro({navigation}){
    const[titulo, setTitulo]=useState("");
    const[descricao, setDescricao]=useState("");
    const[loading, setLoading]=useState(false);

    async function confirmar(){
        if(titulo==""){
            alert("O campo \"Titulo\" não pode estar vazio");
            
        }else{
            setLoading(true);
        
            let data={
                titulo: titulo,
                descricao: descricao.trim().length==0? "Sem descrição": descricao,
            }
    
            const response=await apiRotinas.post("rotinas", data);
    
            if(response.status==201){
                setLoading(false);
                alert("Rotina cadastrado com sucesso");
                setTitulo("");
                setDescricao("");
            }else{
                setLoading(false);
                alert("Erro ao cadastrar rotina");
            }
        }
    }
    function rotinas(){
        navigation.navigate("Principal");
    }
    return(
        <View style={styles.container}>
            <Input placeholder={"Iforme o titulo"} label="Titulo:" onChangeText={(text)=> setTitulo(text)}/>
            <Input placeholder={"Informe a descrição"} label="Descrição(opcional):" onChangeText={(text)=> setDescricao(text)}/>
            <ButtonLarger text={"Confirmar"} onPress={confirmar}/>
            <ButtonLarger text={"Rotinas"} onPress={rotinas}/>
            <LoadingModal visible={loading}/>
        </View>
    );
}