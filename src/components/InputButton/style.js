import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        width:"100%",
    },
    containerInputButton:{
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        borderRadius: 12,
        flexDirection: "column",
    },
    containerInput:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    icon:{
        marginLeft: 16,
        marginVertical: 8,
        marginRight: 4,
    },
    input:{
        outlineStyle: "none",
        width:"100%",
    },
    anxImg:{
        textDecorationLine: "underline"
    },
    bntImg:{
        outlineStyle: "none"
    }
});

export default styles;