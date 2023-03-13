import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_API;
const BASE_URL = "http://localhost:8089/api";
export function getAllPost() {
    return fetch(BASE_URL+'/post')
        .then(response => response.json())
        .catch(error => console.error(error));
}
