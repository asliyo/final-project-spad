import React from 'react';
import axios from 'axios'
//import { Navbar, Container, Nav } from 'react-bootstrap'

import Navbar from '../components/Navbar';

const Home = (props) => {
    const handleClick = () => {
        axios.delete('http://localhost:3001/logout', { withCredentials: true })
            .then(response => {
                props.handleLogout()
                props.history.push('/')
            })
            .catch(error => console.log(error))
    }
    return (
        <section>
        <div>
        <Navbar {...props} handleClick={handleClick}/>
        </div>
        <div>
            <h2>Final Project: <span>Admin Module</span></h2>
        </div>

        </section>

    );
};
export default Home;