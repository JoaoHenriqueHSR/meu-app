import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-between",
        padding: 16,
    },
    buttonContainer:{
        flex:1,
        flexDirection: "row",
        gap:2,
        marginVertical: 8,
    },
    input:{
        outlineStyle: "none",
        borderWidth:1,
        borderColor: "#888a89",
        borderRadius:2,
        paddingVertical: 8,
        paddingHorizontal:4,
    },
    containerTecla:{
        marginBottom:"25%"
    }
});

export default styles;