import axios from 'axios'

export const is_loggedin = () => {
    return axios.get(`http://localhost:3001/is_loggedin`);
};

export const login = () => {
    return axios.post(`http://localhost:3001/login`);
};

export const allUsers = () => {
    return axios.get(`http://localhost:3001/users`);
};

export const getUsers = () => {
    return axios.get(`http://localhost:3001/users`);
};

export const getUserByID = (id) => {
    return axios.get(`http://localhost:3001/users/${id}`);
};


const UserAPI = {
    is_loggedin,
    login,
    allUsers,
    getUsers,
    getUserByID
}

export default UserAPI;