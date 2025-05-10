import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        padding: 16,
        gap: 8,
        backgroundColor: "white"
    },
    containerInputs:{
        gap: 8,
    },
    containerCEP:{
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default styles;