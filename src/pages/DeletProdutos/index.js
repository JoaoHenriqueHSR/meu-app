import { View} from "react-native";
import styles from "./style";
import Input from "../../components/Input";
import ButtonLarger from "../../components/ButtonLarge";
import { useState } from "react";
import LoadingModal from "../LoadingModal";
import apiProduto from "../../services/ProdutoApi";


export default function DeletProdutos(){
    const[descricao, setDescricao]=useState("");
    const[valor, setValor]=useState("");
    const[unidade, setUnidade]=useState("");
    const[loading, setLoading]=useState(false);

    async function confirmar(){
        if(descricao==""||valor==""||unidade==""){
            alert("os campos não podem estar vazios")
        }else{
            setLoading(true);
        
            let data={
                descricao: descricao,
                valor: parseFloat(valor),
                unidade: unidade
            }
    
            const response=await apiProduto.post("produto", data);
    
            if(response.status==201){
                alert("Produto cadastrado com sucesso");
                setLoading(false);
                setDescricao("");
                setValor("");
                setUnidade("");
            }else{
                setLoading(false);
                alert("Erro ao cadastrar produto");
            }
            //setTimeout(function(){setLoading(false);}, 2000);
        }
        
    }
    return(
        <View style={styles.container}>
            <Input placeholder={"Iforme a descrição"} label="Descrição:" onChangeText={(text)=> setDescricao(text)}/>
            <Input placeholder={"Informe o valor"} label="Valor:" onChangeText={(text)=> setValor(text)}/>
            <Input placeholder={"Informe a unidade"} label="Unidade:" onChangeText={(text)=> setUnidade(text)}/>
            <ButtonLarger text={"Confirmar"} onPress={confirmar}/>
            <LoadingModal visible={loading}/>
        </View>
    );
}