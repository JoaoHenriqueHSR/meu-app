import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        borderRadius: 12,
        flexDirection: "row",
    },
    icon:{
        marginLeft: 16,
        marginVertical: 8,
        marginRight: 4,
    },
    input:{
        outlineStyle: "none"
    }
});

export default styles;