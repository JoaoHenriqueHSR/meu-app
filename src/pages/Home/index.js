import { View, Image, TouchableOpacity, Text } from "react-native";
import ButtonLarger from "../../components/ButtonLarge";
import InputPassword from "../../components/InputPassword";
import Input from "../../components/InputIcon";
import styles from "./style";


export default function Home({navigation}){
    function Calculadora(){
        navigation.navigate("Calc");
    }
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/image/Avatar-Loak.jpg')} style={styles.img} />
            <Input label="Login:" placeholder="Email" icone="user"/>
            <InputPassword placeholder="Informe sua senha" label="Senha:"/>
            <ButtonLarger text="Entrar" onPress={Calculadora}/>
        </View>
    );
};