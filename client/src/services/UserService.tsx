import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_API;
const BASE_URL = "http://localhost:8089/api";

export function getAllUser() {
    return fetch(BASE_URL+'/users')
        .then(response => response.json())
        .catch(error => console.error(error));
}


export function getLoginInfo(email: string, password: string) {
    return fetch(BASE_URL+'/users/' + email +"/" + password )
        .then(response => response.json())
        .catch(error => console.error(error));
}


export function sendLoginInfo(username: string, password: string, email: string, lastname: string, firstname: string) {


    const User = {
        firstName: firstname,
        lastName: lastname,
        username: username,
        email: email,
        password: password,
        img: "img"
    };

    return fetch(BASE_URL+'/users/' + User )
        .then(response => response.json())
        .catch(error => console.error(error));
}




// const getUser = () => {
//     return axios.get(BASE_URL + "account");
// };
//
// const getAdminOverview = () => {
//     return axios.get(BASE_URL + "session");
// };
//
// const UserService = {
//     getUser,
//     getAdminOverview,
// }

