import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16
    },
    text:{
        justifyContent: "center"
    },
    icon:{
        marginLeft: 16,
        marginVertical: 8,
        marginRight: 4,
    },
    icons:{
        flexDirection: "row",
        gap: 8,
    },
});

export default styles;