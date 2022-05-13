import {StyleSheet} from 'react-native'


const estiloLogin = StyleSheet.create({


    principal: {
        backgroundColor:"#3417F1",
        width:'100%',
        height:'100%',
        resizeMode: "cover"
    },

    caixainput: {
        
        flexDirection: "column",
        width: "100%",
        paddingHorizontal: "10%",
        paddingVertical: "10%"
    },

    imagemLogin: {
        alignSelf:'center',
        width: 228,
        height: 228, 
    },

    entrada: {
        justifyContent: "center",
        height: 50,
        borderColor: 'black',
        borderWidth: 0,
        borderRadius: 10,
        marginTop: 17,
        backgroundColor: "#F6F6F6",
        paddingHorizontal: 20
    },

    botao: {
        justifyContent: "center",
        backgroundColor: "#DCDCDC",
        paddingVertical: 16,
        borderRadius: 10,
        marginHorizontal: "25%",
        marginTop: 50
    },
    textobotao: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "900",
        color: "#3417F1"
    }
});
export default estiloLogin