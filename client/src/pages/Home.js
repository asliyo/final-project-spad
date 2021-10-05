import React from 'react';
import NavMenu from '../components/Navbar';
import { Link } from 'react-router-dom';
import Login from './Login';

const Home = (props) => {
    return (
        <section>
            <div>
            <NavMenu {...props} />
            </div>
            <div className="container">
                { props.loggedInStatus ? (
                    <>
                        <h2>Status: Logged In</h2><br/>
                        <Link to="/dashboard">See Personnels on Dashboard</Link>
                    </>
                    ) : (
                    <>
                        <Login />
                    </>
                    )
                }
            </div>
        </section>

    );
};
export default Home;