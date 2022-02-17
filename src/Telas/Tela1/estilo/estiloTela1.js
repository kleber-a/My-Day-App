import { StyleSheet } from "react-native";



const estiloTela1 = StyleSheet.create({
    //Tela Toda
    Principal: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        backgroundColor: "#E5E5E5"
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
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "50%",
        borderRadius: 20,
        flexDirection: "row"
        
    
    },

    caixa1image: {
        backgroundColor: "#FFFFFF",
        width: "50%",
        height: "100%",
        flexDirection: "row",
        borderRadius: 20
        
    },

    img: {
        width: 57,
        height: 57,
        resizeMode: "cover",
        backgroundColor: "white",
        margin: 10
    },

    textoEmoji: {

        width: 100,
        height: 37,
        fontWeight: "700",
        fontSize: 24,
        color: "#E24B4B",
        marginTop: 37        
        
    },
    
    caixa1TextoCima: {
        width: "50%",
        backgroundColor: "#FFFFFF",
        borderRadius: 20
    },
    

    texto1: {
        color: "#ACACAC",
        fontSize: 16,
        textAlign: "center",
        lineHeight: 24,
        fontWeight: "400",
        right: 88,
        marginTop: 10
    },

    

    textoH: {
        width: 40,
        height: 21,
        color: "#ACACAC",
        fontSize: 14,
        lineHeight: 21,
        textAlign: "center",
        bottom: 28,
        marginTop: 40

        
      
    },
    //Fim caixa1


    //Caixa2
    caixa2: {
        backgroundColor: "#FFFF",
        width: "100%",
        height: "20%",
        flexDirection: "row",
        paddingLeft: 2,
        paddingVertical: 5
    },
    //=====================
    icon1: {
        width: 20.56,
        height: 20.56,
        marginLeft: 10
    },
    txt1caixa2: {
        fontWeight: "600",
        width: 40,
        height: 19.14,
        color: "black",
        marginLeft: 5

    },
    ponto: {
        height: "100%",
        marginVertical: 10,
        marginLeft: 5,
        color: "black"
    },
    //=======================
    icon2: {
        width: 20.56,
        height: 20.56,
        marginLeft: 10
    },
    txt2caixa2: {
        fontWeight: "600",
        width: 50,
        height: 19.14,
        color: "black",
        marginLeft: 10
    },
    //========================
    icon3: {
        width: 20.56,
        height: 20.56,
        marginLeft: 10

    },
    txt3caixa2: {
        color: "black",
        width: 70,
        height: 19.14,
        fontWeight: "600",
        marginLeft: 10
    },

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
        height: "100%"
    }


})

export default estiloTela1;