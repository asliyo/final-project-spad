import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import UserAPI from "../api/UserService";


const Dashboard = () => {

    const [users, setUsers ] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const response = await UserAPI.getUsers()
        console.log(response)
        setUsers(response.data.users)
    }, [])
    return (
        
        <div>
            <h1>Dashboard</h1>
            {users.map((user) => 
            <h4 key={user.id}>
                Hello, {user.username}!
                {user.role}
            </h4>
            )}
            <Link to="/personnels">See Personnels</Link>
        </div>
    )
}
// class Dashboard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }

//     componentDidMount() {
//         const session = sessionStorage.getItem('uid')
//         console.log('session ->', session)
//         if (session) {
//             UserAPI.getUserByID(session).then(res => {
//                 console.log('response -> ', res)

//                 // // get Users
//                 // getUsers();
//             })
//         }
//         // getUsers = () => {
//         //     console.log(123)
//         // }
//     }
// render() {
//     return (
//         <h1>Dashboard</h1>
//     ) 
//     }
// }
export default Dashboard;