import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        backgroundColor: "#ffffff",
        flex: 1,
        justifyContent:"center",
        padding: 16,
        gap: 8,
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