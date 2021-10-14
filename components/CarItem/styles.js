import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ffff",
    },
    headers: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    headerTitle: {
        color: "#000",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        color: "#000"
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute"
    },
    batterySection: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    batteryImage: {
        marginTop: -15,
        height: 80,
        width: 90,
        marginRight: 0
    },
    batteryText: {
       marginTop: -20,
       color: "#000",
       fontSize: 26, 
       fontWeight: "bold"
    },
    status: {
        color: "#000",
        alignItems: "center",
        justifyContent: "center"
    },
    statusText: {
        marginTop: 160,
        marginBottom: 10,
        color: "#000",
        fontSize: 36,
        fontWeight: "bold",

    },
    controls: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    controlButton: {
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 45,
        padding: 10,
        marginLeft: 30,
        marginRight: 30
    }
    
})

export default styles;


  