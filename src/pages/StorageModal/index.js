import { Modal, View, Image  } from "react-native";
import styles from "./style.js";
import ButtonSmall from "../../components/ButtonSmall/index.js";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function StorageModal({visible, txtEscolher, txtCancelar, onPressCancelar}){
    const [image, setImage]=useState();
   

    async function escolherImg() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    return(
        <Modal transparent animationType="fade" visible={visible}>
            <View style={styles.container}>
                <View style={styles.containerMsg}>
                    {image?(
                            <Image source={{uri:image}} style={styles.img}/>
                        ):
                        (
                            <Image source={require('../../../assets/image/default.jpg')} style={styles.img} />
                        )
                    }
                    <View style={styles.containerBtn}>
                        <ButtonSmall text={txtEscolher} onPress={escolherImg}/>
                        <ButtonSmall text={txtCancelar} onPress={onPressCancelar}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}