import React from 'react';
import { SignupForm } from '../components/SignupForm';
import UserAPI from '../api/UserService';
import { useHistory } from 'react-router';
import NavMenu from '../components/Navbar';

const SignupNew = (props) => {
    const history = useHistory();
    const handleSubmit = (data) => { 
        console.log(data)
        UserAPI.signup(data).then(response => {
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
        <>
            <NavMenu {...props} />
            <SignupForm onSubmit={handleSubmit}/>
        </>
        )
}

export default SignupNew;