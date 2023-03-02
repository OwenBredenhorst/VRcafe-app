import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_API;
const BASE_URL = "http://localhost:8080";

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

