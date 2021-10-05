import axios from 'axios'

export const isLoggedin = () => {
    return axios.get(`http://localhost:3001/logged_in`);
};

export const login = (data) => {
    return axios.post('http://localhost:3001/login',{session: data}, { withCredentials: true });
};

export const getUsers = () => {
    return axios.get(`http://localhost:3001/users`);
};

export const getUserByID = (id) => {
    return axios.get(`http://localhost:3001/users/${id}`);
};

export const signup = (data) => {
    axios.post('http://localhost:3001/users', { user: data }, { withCredentials: true })
}

const UserAPI = {
    isLoggedin,
    login,
    getUsers,
    getUserByID,
    signup
}

export default UserAPI;