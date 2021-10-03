import axios from 'axios'

export const isLoggedin = () => {
    return axios.get(`http://localhost:3001/logged_in`);
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

export const logout = () => {
    localStorage.removeItem("user");
};



const UserAPI = {
    isLoggedin,
    login,
    allUsers,
    getUsers,
    getUserByID,
    logout
}

export default UserAPI;