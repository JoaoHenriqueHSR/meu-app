import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    containerText:{
        justifyContent: "center",
    },
    text:{
    },
    buttonIcon:{
        flexDirection: "row",
        gap: 8,
        height: "100%",
        alignItems: "center",
    },
    atributos:{
        fontWeight: "bold",
    },
});

export default styles;