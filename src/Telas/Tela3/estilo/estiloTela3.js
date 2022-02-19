import { StyleSheet } from "react-native";


const estiloTela3 = StyleSheet.create({
    Tela: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        backgroundColor: "#E5E5E5"
    },

    botaoVoltar:{
        backgroundColor: "#304FFE1A",
        borderRadius: 15,
        width: 50,
        height: 50,
        top: 10,
        left: 10
    },

    SetaVoltar: {
        color: "#304FFE",
        marginTop: 9,
        marginLeft: 9
    },

    caixagrande: {
        backgroundColor: "#E5E5E5",
        width: 200,
        height: 210,
        marginHorizontal: 75,
        marginTop: 5
    },
    caixa1: {
        width: "100%",
        height: 50,
        backgroundColor: "white"
    },

    icones: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
    },


    image: {
        width: 65,
        height: 65,
        marginLeft: "30%",
        marginTop: 40
    },

    txtHumor: {
        color: "red",
        backgroundColor: "#E5E5E5",
        width: 50,
        fontWeight: "700",
        fontSize: 22,
        marginLeft: 70,
        marginTop: 20
    },

    caixaacao: {
        width: 320,
        height: 158,
        backgroundColor: "#FFFFFF",
        marginTop: 30,
        marginHorizontal: 20,
        borderRadius: 20
    },

    caixaAcaoIcone: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "50%",
        flexDirection: "row",
        paddingTop: 40,
        borderRadius: 20

    },

    iconeacao: {
        marginLeft: 50,
        backgroundColor: "#304FFE",
        borderRadius: 500   
    },

    caixaAcaoTexto: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "50%",
        flexDirection: "row",
        borderRadius: 20
    },

    textoacao: {
        marginLeft: 48,
        fontSize: 15,
        fontWeight: "600",
        marginTop: 5
    },

    caixaTexto: {
        backgroundColor: "white",
        width: 320,
        height: 100,
        marginLeft: 20,
        marginTop: 20,
        paddingVertical: 13,
        paddingHorizontal: 20,
        borderRadius: 20
    },

    comentario: {
        fontSize: 13,
        fontWeight: "400",
        textAlign: "justify",
        color: "#000000"

    }


})
export default estiloTela3;