import React from 'react';
import './Login.css';
import {auth, provider} from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer'

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then (result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => {
                // alert(error.message);
            });
    }

    return (
        <div className="login">
            <div className="loginContainer" >
                <h1>Sign in to Message Me</h1>
                <button onClick={signIn}><i className="fab fa-google"></i> Sign In with Google</button>
            </div>       
        </div>
    )
}

export default Login
