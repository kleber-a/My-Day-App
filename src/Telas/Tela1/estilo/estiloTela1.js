import { StyleSheet } from "react-native";



const estiloTela1 = StyleSheet.create({
    //Tela Toda
    Principal: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        backgroundColor: "#E5E5E5",
        
    },

    //Container
    container: {
        backgroundColor: "#FFFFFF",
        width: "90%",
        height: 158,
        left: 19,
        marginTop: 20,
        borderRadius: 20,
        

    },

    //Caixa1
    caixa1: {
        backgroundColor: "#FFFF",
        width: "100%",
        height: "50%",
        borderRadius: 20,
        flexDirection: "row"


    },

    caixa1image: {
        backgroundColor: "#FFFF",
        width: "25%",
        height: "100%",
        flexDirection: "row",
        borderRadius: 20

    },

    img: {
        width: 57,
        height: 57,
        resizeMode: "cover",
        backgroundColor: "#FFFF",
        marginLeft: 24,
        marginTop: 15
    },



    caixa1TextoCima: {
        width: "75%",
        height: "100%",
        backgroundColor: "#FFFF",
        borderRadius: 20,

    },


    texto1: {
        color: "#ACACAC",
        fontSize: 16,
        textAlign: "center",
        lineHeight: 24,
        fontWeight: "400",
        top: 15,
        right: 26


    },

    humor: {
        backgroundColor: "#FFFF",
        width: "80%",
        fontWeight: "700",
        fontSize: 22,
        marginTop: 22,
        marginLeft: 15,
    },

    textoEmoji: {

        backgroundColor: "#FFFF",
        width: "80%",
        fontWeight: "700",
        fontSize: 22,
        color: "#E24B4B",
        marginTop: 22,
        marginLeft: 15,



    },


    textoH: {
        width: "100%",
        height: "100%",
        color: "#ACACAC",
        fontSize: 14,
        lineHeight: 21,
        textAlign: "center",
        fontWeight: "normal",
        backgroundColor: "#FFFF",


    },
    //Fim caixa1


    //Caixa2
    caixa2: {
        backgroundColor: "#FFFF",
        width: "100%",
        height: "20%",
        flexDirection: 'row',
        justifyContent:'flex-start',
        paddingHorizontal: 15
        
        
    },
    //=====================
    icon1: {
        width: 20.56,
        height: 20.56,
        marginLeft: 0,
        marginRight: 5
    },
    txt1caixa2: {
        fontWeight: "600",
        width: 45,
        height: 19.14,
        color: "black",
       

    },
    ponto: {
        width: 15,
        height: "100%",
        marginVertical: 10,
        color: "black",
        
    },
    //=======================
    


    //Caixa3
    caixa3: {
        width: "100%",
        height: "30%",
        backgroundColor: "#FFFF",
        borderRadius: 15
    },
    txtcaixa3: {
        marginHorizontal: 20,
        marginVertical: 10,
        width: "90%",
        height: 20
    },





})

export default estiloTela1;