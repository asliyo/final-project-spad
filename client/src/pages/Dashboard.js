import React, { Component } from "react";
import UserAPI from "../api/UserService";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        const session = sessionStorage.getItem('uid')
        console.log('session ->', session)
        if (session) {
            UserAPI.getUserByID(session).then(res => {
                console.log('response -> ', res)

                // get Users
                getUsers()
            })
        }

    }

    getUsers() => {
    console.log(123)

}

render() {
    return (
        <h1>Dashboard</h1>
    );
}
}
export default Dashboard;