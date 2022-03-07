import axios from "axios";

const api = axios.create({
    baseURL: 'https://shrouded-shelf-01513.herokuapp.com/'
});

//====================================================
export function getUser(){
    api.get("daily_entries?username=joaopedro")
    .then(response => {
        const data = response.data
        console.warn(data)
    })
    .catch(error => console.log(error))
}


export function addUser(user){
    api.post("daily_entries/",user)
    .then(response =>{
        const data = response.data  
    })
    .catch(error => console.warn(error))
}

export function deleteUser(id){
    api.delete(`daily_entries/${id}`)
    .then(response =>{
        const data = response.data  
    })
    .catch(error => console.warn(error))
}
//=========================================================


export function getUseractives(){
    api.get("activities/")
    .then(response => {
        const data = response.data
        dados = data
    })
    .catch(error => console.log(error))
}





export default api;

// (https://shrouded-shelf-01513.herokuapp.com/)