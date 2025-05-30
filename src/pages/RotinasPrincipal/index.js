import { View, FlatList, Alert, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import RotinaItem from "../../components/RotinaItem";
import apiRotinas from "../../services/apiRotinas";
import ButtonLarger from "../../components/ButtonLarge";
import LoadingModal from "../LoadingModal";
import styles from "./style.js";
import { useIsFocused } from "@react-navigation/native";

export default function Principal({ navigation }) {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const comFoco=useIsFocused();

  useEffect(() => {
    buscarDados();
  }, [comFoco]);

  async function buscarDados() {
    setLoading(true);
    const response = await apiRotinas.get("rotinas");
    if(response.status!==201){
        setDados(response.data);
    }else{
        alert("Não foi possivel carregar dados")
        setLoading(false);
    }
    setLoading(false);
  }

  async function checado(id, novoStatus) {
    setLoading(true);

    const response = await apiRotinas.put(`rotinas/${id}`, {status: novoStatus});

    if (response.status===200) {
      const novosDados=dados.map((rotina)=>{
        return rotina.id===id? {...rotina, status: novoStatus}:rotina;
      });
      setDados(novosDados);
    } else {
      alert("Não foi possível atualizar a rotina.");
    }
    
    setLoading(false);
  }

  async function deletar(id) {
    
    let resposta=confirm("Tem certeza que deseja excluir?");
    if(resposta){
      const response = await apiRotinas.delete(`rotinas/${id}`);
      console.log(response)
      if(response.status===200){
        alert(`Rotina ${id} deletada com sucesso!`);
        buscarDados();
      }else{
        alert("Não foi possivel deletar")
      }
    }
  }

  function cadastrar(){
    navigation.navigate("Cadastro");
  }

  return(
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item)=>item.id.toString()}
        ListFooterComponent={
          <View>
            <LoadingModal visible={loading}/>
            <ButtonLarger text={"Cadastrar"} onPress={cadastrar}/>
          </View>
        }
        renderItem={({ item })=>(
          <RotinaItem
            iconCheck={item.status?"checkbox-active":"checkbox-passive"}
            iconDelet={"trash"}
            titulo={item.titulo}
            desc={item.descricao}
            status={item.status? "Concluído":"Pendente"}
            onPressCheck={()=>{checado(item.id, !item.status)}}
            onPressDelet={()=>{deletar(item.id)}}
          />
        )}
      />
      
    </View>
  );
}