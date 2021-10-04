import React from 'react';
import { UserForm } from '../components/Form';
import UserAPI from '../api/UserService';
import { useHistory } from 'react-router';

const LoginNew = (props) => {
    const history = useHistory();
    const handleSubmit = (data) => { 
        console.log(data)
        UserAPI.login(data).then(response => {
                if (response.data.logged_in) {
                    sessionStorage.setItem('uid', response.data.user.id)
                    props.handleLogin(response.data)
                    history.push('/dashboard')
                    console.log(response.data)
                } else {
                    this.setState({
                        errors: response.data.errors
                    })
                }
            })
            .catch(error => console.log('api errors:', error))
    };

    return (
            <UserForm onSubmit={handleSubmit}/>
        )
}

export default LoginNew;