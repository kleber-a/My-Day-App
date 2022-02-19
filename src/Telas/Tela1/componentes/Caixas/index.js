import React from 'react'
import happy from '../../../../../assets/image/humores/happy.png'
import nervous from '../../../../../assets/image/humores/nervous.png'
import sad from '../../../../../assets/image/humores/sad.png'


// lista {0 , 1 , 2 , 3 , 4}


const Caixas = [
    {
        id: 1,
        img: happy,
        data: "HOJE, 23 DE JANEIRO",
        humor: "BEM",
        color: "red",
        hora: "08:35",
        icone1 : "run" ,
        acao1 : "correr",
        icone2 : "sports-handball",
        acao2 : "esporte",
        icone3 : "restaurant",
        acao3: "comer",
        comentario: "Hoje foi um dia muito bom. Joguei futebol no parque, cozinhei uma lasanha para minha família. E à noite, fui à festa de aniversário do meu amigo."
    },
    {
        id: 2,
        img: nervous,
        data: "ONTEM, 22 DE JANEIRO",
        humor: "MAL",
        color: "blue",
        hora: "08:35",
        icone1 : "pencil-outline" ,
        acao1 : "desenhar",
        icone2 : "store",
        acao2 : "comprar",
        icone3 : "two-wheeler",
        acao3: "dirigir",
        comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque, orci eu pharetra elementum, erat enim pulvinar diam, ut facilisis nisi diam in sem."
    },
    {
        id: 3,
        img: sad,
        data: "21 DE JANEIRO",
        humor: "TRISTE",
        color: "green",
        hora: "08:35",
        icone1 : "axe" ,
        acao1 : "lenhar",
        icone2 : "hotel",
        acao2 : "dormir",
        icone3 : "golf-course",
        acao3: "jogar golf",
        comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque, orci eu pharetra elementum, erat enim pulvinar diam, ut facilisis nisi diam in sem."
    },
    {
        id: 4,
        img: happy,
        data: "20 DE JANEIRO",
        humor: "BEM",
        color: "red",
        hora: "08:35",
        icone1 : "yoga" ,
        acao1 : "yoga",
        icone2 : "emoji-symbols",
        acao2 : "estudar",
        icone3 : "fastfood",
        acao3: "comer",
        comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque, orci eu pharetra elementum, erat enim pulvinar diam, ut facilisis nisi diam in sem."
    },
    {
        id: 5,
        img: happy,
        data: "19 DE JANEIRO",
        humor: "BEM",
        color: "red",
        hora: "08:35",
        icone1 : "trumpet" ,
        acao1 : "tocar",
        icone2 : "computer",
        acao2 : "trabalhar",
        icone3 : "local-restaurant",
        acao3: "jantar",
        comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque, orci eu pharetra elementum, erat enim pulvinar diam, ut facilisis nisi diam in sem."
    },
    {
        id: 6,
        img: happy,
        data: "18 DE JANEIRO",
        humor: "BEM",
        color: "red",
        hora: "08:35",
        icone1 : "kitesurfing" ,
        acao1 : "surfar",
        icone2 : "pedal-bike",
        acao2 : "pedalar",
        icone3 : "sports-mma",
        acao3: "lutar",
        comentario: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque, orci eu pharetra elementum, erat enim pulvinar diam, ut facilisis nisi diam in sem."
    }
]
export default Caixas