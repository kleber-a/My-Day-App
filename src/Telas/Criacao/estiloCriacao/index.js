import { StyleSheet } from 'react-native'

const estiloTelaCriacao = StyleSheet.create({

    modal: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: 'center'
    },
    botaoVoltar: {
        backgroundColor: "#304FFE1A",
        borderRadius: 15,
        width: 45,
        height: 45,
        top: 30,
        right: 140,
        alignItems: "center",
        justifyContent: "center"
    },

    xVoltar: {
        color: "#304FFE",

    },

    caixa1: {

        width: "90%",
        height: 150,
        marginTop: 10,
        alignItems: 'center'

    },

    h1: {
        fontSize: 30,
        fontWeight: "700",
        color: "black",
        textAlign: "center"

    },

    caixaDate: {
        backgroundColor: "white",
        width: "100%",
        height: 30,
        marginTop: 5,
        flexDirection: "row",

    },

    icones: {
        justifyContent: "center",
        marginLeft: 20,
        fontSize: 16
    },

    emoji: {
        
        width: "100%",
        
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    humores: {
        alignItems:'center',
        marginHorizontal: 5
    },

    img: {
        width: 43,
        height: 43
    },


    //Caixa meio

    caixaselecao: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignContent: 'stretch',
        alignItems: 'center',

        marginTop: 10,
        width: "90%",
        height: 300,

        borderRadius: 20,
        borderWidth: 2

    },

    dividerActivity1: {
        width: 50,
        height: 50,

    },

    caixacomentario: {
        alignItems: 'flex-start',
        width: "90%",
        height: 75,
        borderRadius: 20,
        borderWidth: 2,
        paddingHorizontal: 5,
        marginTop: 10
    },

    botaao: {
        width: "90%",
        height: 40,
        marginTop:5,
        borderRadius: 10,
        backgroundColor: "blue",
        alignItems: 'center',
        justifyContent: 'center'
    },




})

export default estiloTelaCriacao;