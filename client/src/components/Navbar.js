import React from 'react';
import axios from 'axios';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useCookies } from "react-cookie";
import { useHistory } from 'react-router';

const NavMenu = (props) => {
    const [cookies, removeCookie] = useCookies(["user"]);
    const history = useHistory();

    const handleLogoutClick = () => {
        axios.delete('http://localhost:3001/logout', { withCredentials: true }).then(response => {
                localStorage.clear();
                history.push('/login');
                removeCookie("user");
                window.location.reload('/');
                console.log(localStorage)
                console.log(cookies.user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            {
                props.loggedInStatus ? 
                    (
                        <>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                        <Navbar.Brand href="/">Final Project</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href='/dashboard'>See Dashboard</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href='/logout' onClick={handleLogoutClick}>Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Container>
                        </Navbar>
                        </>
                    )
                :
                    (
                        <>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                        <Navbar.Brand href="/">Final Project</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                
                            </Nav>
                            <Nav className="me-auto">
                                <Nav.Link href='/login'>Login</Nav.Link>
                                <Nav.Link href='/signup'>Sign Up</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Container>
                        </Navbar>
                        </>
                    )
        }
        </div>

    );
};
export default NavMenu;