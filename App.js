import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/pages/Home";
import Calc from "./src/pages/Calc";
import ConsultaCEP from "./src/pages/ConsultaCEP";
import ConsultaCNPJ from "./src/pages/ConsultaCNPJ";
import Produto from "./src/pages/Produto";
import ConsultaProduto from "./src/pages/ConsultaProduto";
import EditProdutos from "./src/pages/EditProdutos";
import DeletProdutos from "./src/pages/DeletProdutos";

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Produto">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Calc" component={Calc}/>
        <Stack.Screen name="ConsultaCEP" component={ConsultaCEP}/>
        <Stack.Screen name="ConsultaCNPJ" component={ConsultaCNPJ}/>
        <Stack.Screen name="Produto" component={Produto}/>
        <Stack.Screen name="ConsultaProduto" component={ConsultaProduto}/>
        <Stack.Screen name="EditProdutos" component={EditProdutos}/>
        <Stack.Screen name="DeletProdutos" component={DeletProdutos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
