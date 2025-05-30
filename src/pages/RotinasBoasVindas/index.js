import { View, Image, TouchableOpacity, Text } from "react-native";
import ButtonLarger from "../../components/ButtonLarge";
import InputPassword from "../../components/InputPassword";
import InputIcon from "../../components/InputIcon";
import styles from "./style";


export default function BoasVindas({navigation}){
    function Principal(){
        navigation.navigate("Principal");
    }
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/image/Avatar-Loak.jpg')} style={styles.img} />
            <InputIcon label="Login:" placeholder="Email" icone="user"/>
            <InputPassword placeholder="Informe sua senha" label="Senha:"/>
            <ButtonLarger text="Entrar" onPress={Principal}/>
        </View>
    );
};