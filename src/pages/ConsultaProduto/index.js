import { View, FlatList, Text} from "react-native";
import styles from "./style";
import ButtonLarger from "../../components/ButtonLarge";
import { useState } from "react";
import { useEffect } from "react";
import apiProduto from "../../services/ProdutoApi";
import LoadingModal from "../LoadingModal";

export default function ConsultaProduto(){
    const[loading, setLoading]=useState(false);
    const[dados, setDados]=useState([]);
    //quando a tela carregar chama a função consultar dados
    //[] vazio significa que vai executar uma vez, quando a tela carregar
    

    async function buscarDados(){
        setLoading(true);

        const response=await apiProduto.get("produto");
        if(response.status==200){
            setDados(response.data);
        }else{
            alert("Não foi possivel carregar produtos")
        }
        setLoading(false);
    }
    return(
        <View style={styles.container}>
            <ButtonLarger text={"Consultar"} onPress={buscarDados}/>
            <FlatList data={dados} keyExtractor={(item)=>item.id} renderItem={({item})=>{
                return(
                <View>
                    <Text>
                        {item.id}
                        {item.descricao},
                        {item.valor},
                        {item.unidade}
                    </Text>
                </View>
                );
            }}/>
        <LoadingModal visible={loading}/>
        </View>
    );
}