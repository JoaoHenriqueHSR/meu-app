import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        width:"100%",
    },
    containerInput:{
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon:{
        marginLeft: 16,
        marginVertical: 8,
        marginRight: 4,
    },
    input:{
        outlineStyle: "none",
        width:"100%",
    }
});

export default styles;