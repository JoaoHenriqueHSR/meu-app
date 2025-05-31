import React from "react";
import { Modal, View, Image  } from "react-native";
import styles from "./style.js";

export default function StorageModal({visible}){
    return(
        <Modal transparent animationType="fade" visible={visible}>
            <View style={styles.container}>
                <Image  style={styles.gif} source={require("../../../assets/image/Loading.gif")} resizeMode="contain"/>
            </View>
        </Modal>
    );
}