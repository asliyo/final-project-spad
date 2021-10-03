import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'
import axios from 'axios'
import UserAPI from "../api/UserService";


const Dashboard = (props) => {
    const handleClick = () => {
        axios.delete('http://localhost:3001/logout', { withCredentials: true })
            .then(response => {
                UserAPI.logout();
                localStorage.clear();
                props.history.push('/')
            })
            .catch(error => console.log(error))
    }

    const [user, setUser ] = useState([]);
    const [personnels, setPersonnels ] = useState([]);
    const uid = localStorage.getItem('uid');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const response = await axios.get(`http://localhost:3001/users/${uid}`)
        setUser(response.data.user)
        setPersonnels(response.data.personnel)
        console.log(response)
    }, [uid])

    return (
        <>
        <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Final Project{props.loggedInStatus}</Navbar.Brand>
                <Nav className="me-auto">
                    {
                        props.loggedInStatus ? 
                            (
                                <>
                                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link onClick={handleClick}>Logout</Nav.Link>
                                </>
                            )
                        :
                            (
                                <>        
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/signup">Sign Up</Nav.Link>
                                </>
                            )
                    }
                </Nav>
            </Container>
        </Navbar>
        </div>
        <div>
            <h1>Personnels</h1>
            <h4>
                Hello, {user.username}! <br/>Role: {user.role}
            </h4>
            {personnels.map((personnel) => <li key={personnel.id}>{personnel.username}|{personnel.role}</li>)}
        </div></>
    )
}
export default Dashboard;