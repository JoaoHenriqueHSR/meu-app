import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "rgba(0,0,0,0.5)",
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },
    containerMsg:{
        width: "100%",
        height: 500,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    containerBtn:{
        flexDirection: "row",
        gap: 8,
        paddingTop: 16
    },
    img:{
        height: 300,
        width: 300,
    },
});

export default styles;