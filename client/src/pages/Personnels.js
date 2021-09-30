import React, { useEffect, useState } from "react";
import UserAPI from "../api/UserService";


const Personnels = () => {

    const [personnels, setPersonnels] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const response = await UserAPI.getUserByID()
        console.log(response)
        setPersonnels(response.data.users)
    }, [])
    return (
        
        <div>
            <h1>Personnels</h1>
            {personnels.map((personnel) => 
            <h4 key={personnel.id}>
                Hello, {personnel.username}!
                {personnel.role}
            </h4>
            )}
            
        </div>
    )
}
export default Personnels;