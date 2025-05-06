import { TextInput, View } from "react-native-web";
import ButtonCalc from "../../components/ButtonCalc"
import styles from "./style";

export default function Calc(){
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} editable={false}/>
            <View style={styles.containerTecla}>
                <View style={styles.buttonContainer}>
                    <ButtonCalc num={"7"}/>
                    <ButtonCalc num={"8"}/>
                    <ButtonCalc num={"9"}/>
                    <ButtonCalc num={"x"}/>
                </View>
                <View style={styles.buttonContainer}>
                    <ButtonCalc num={"4"}/>
                    <ButtonCalc num={"5"}/>
                    <ButtonCalc num={"6"}/>
                    <ButtonCalc num={"+"}/>
                </View>
                <View style={styles.buttonContainer}>
                    <ButtonCalc num={"1"}/>
                    <ButtonCalc num={"2"}/>
                    <ButtonCalc num={"3"}/>
                    <ButtonCalc num={"-"}/>
                </View>
                <View style={styles.buttonContainer}>
                    <ButtonCalc num={"."}/>
                    <ButtonCalc num={"0"}/>
                    <ButtonCalc num={"="}/>
                    <ButtonCalc num={"/"}/>
                </View>
            </View>
            </View>
    );
}