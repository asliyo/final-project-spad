import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from 'axios'


const Dashboard = () => {

    const [user, setUser ] = useState([]);
    const [personnels, setPersonnels ] = useState([]);
    const uid = localStorage.getItem('uid');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const response = await axios.get(`http://localhost:3001/users/${uid}`)
        setUser(response.data.user)
        setPersonnels(response.data.personnel)
        console.log(response)
    }, [])

    return (
        <div>
            <h1>Personnels</h1>
            <h4>
                Hello, {user.username}! <br/>Role: {user.role}
            </h4>
            {personnels.map((personnel) => <li key={personnel.id}>{personnel.username}|{personnel.role}</li>)};
            <Link to="/personnels">See Personnels</Link>
        </div>
    )
}
export default Dashboard;