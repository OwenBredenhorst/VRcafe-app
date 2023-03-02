import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API;

const getUser = () => {
    return axios.get(BASE_URL + "account");
};

const getAdminOverview = () => {
    return axios.get(BASE_URL + "session");
};

const UserService = {
    getUser,
    getAdminOverview,
}

export default UserService;