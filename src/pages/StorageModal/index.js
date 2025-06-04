import { Modal, View, Text  } from "react-native";
import styles from "./style.js";
import ButtonSmall from "../../components/ButtonSmall/index.js";

export default function StorageModal({visible, txtSalvar, txtCancelar,onPressSalvar, onPressCancelar}){
    return(
        <Modal transparent animationType="fade" visible={visible}>
            <View style={styles.container}>
                <View style={styles.containerMsg}>
                    <Text>Anexar imagem</Text>
                    <View style={styles.containerBtn}>
                        <ButtonSmall text={txtSalvar} onPress={onPressSalvar}/>
                        <ButtonSmall text={txtCancelar} onPress={onPressCancelar}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}