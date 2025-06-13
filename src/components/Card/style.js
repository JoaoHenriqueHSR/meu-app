import {StyleSheet} from "react-native";

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F5F5",
        width: "100%",
        gap: 12,
    },
    img:{
        width: "100%",
        height: 300,
    },
    inputDesc:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});

export default styles;
