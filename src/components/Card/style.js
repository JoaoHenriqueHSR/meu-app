import {StyleSheet} from "react-native";

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        padding: 12,
    },
    img:{
        height: 300,
        width: 300,
    },
    inputDesc:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default styles;
