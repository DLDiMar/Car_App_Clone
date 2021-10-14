import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    arrowIcon: {
        color: "#333"
    },
    menuItems: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    icon: {
        color: "#000"
    },
    menuText: {
        fontSize: 26,
        fontWeight: "bold",
        marginLeft: 15,
        textTransform: "uppercase",
        alignItems: "center"
    },
    subTitle: {
        color: "#333",
        fontSize: 18,
        marginLeft: 15
    },
    menuRow: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 10,
        padding: 5
    
    },
    menuTextBox: {
        flexGrow: 1
    }
})

export default styles;