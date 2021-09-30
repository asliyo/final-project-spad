import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
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
            {
                props.loggedInStatus ? 
                    (
                        <>
                        <Link to='/dashboard'>See Dashboard</Link><br></br>
                        <Link to='/logout' onClick={handleClick}>Log Out</Link>
                        </>
                    )
                :
                    (
                        <>        
                        <Link to='/login'>Log In</Link><br></br>
                        <Link to='/signup'>Sign Up</Link><br></br>
                        </>
                    )
        }
        </div>
        <div>
            <h2>Final Project: <span>Admin Module</span></h2>
        </div>

        </section>

    );
};
export default Home;