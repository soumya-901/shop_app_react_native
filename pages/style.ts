import { StyleSheet } from "react-native";

const pageStyle = StyleSheet.create({
    eachCard: {
        flex: 1,
        backgroundColor: "#fff",
        // height: 100,
        // width: 300,
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
        borderRadius: 9,
        // marginLeft: 15
        padding: 6
    },
    scrollView: {
        // backgroundColor:"#E3E3E3",
        padding: 8
    },
    text: {
        fontSize: 30
    },
    shadowPro: {
        elevation: 10,
        shadowColor: '#52006A',
    }
})

export default pageStyle