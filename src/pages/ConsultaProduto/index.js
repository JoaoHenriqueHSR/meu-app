import { View, FlatList} from "react-native";
import styles from "./style";
import { useState } from "react";
import { useEffect } from "react";
import apiProduto from "../../services/ProdutoApi";
import LoadingModal from "../LoadingModal";
import ProdutcItem from "../../components/ProductItem";

export default function ConsultaProduto({navigation}){
    const[loading, setLoading]=useState(false);
    const[dados, setDados]=useState([]);
    //quando a tela carregar chama a função consultar dados
    useEffect(()=>{
        buscarDados();
    }, []);
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
    function editar(){
        navigation.navigate("EditProdutos");
    }

    function delet(){
        navigation.navigate("DeletProdutos")
    }
    return(
        <View style={styles.container}>
            <FlatList data={dados} keyExtractor={(item)=>item.id} renderItem={({item})=>{
                return(
                <ProdutcItem item={item.descricao} onPressEdit={editar} onPressRemove={delet}/>
                );
            }}/>
        <LoadingModal visible={loading}/>
        </View>
    );
}