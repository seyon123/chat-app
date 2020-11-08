import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import logo from './favicon.png'

function Login() {
	// eslint-disable-next-line
	const [state, dispatch] = useStateValue();

	const signIn = () => {
		auth.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => {
				// alert(error.message);
			});
	};

	return (
		<div className="login">
			<div className="loginContainer">
				<img src={logo} width="150" alt="logo" />
				<h1>Sign in to Message Me</h1>
				<button onClick={signIn}>
					<i className="fab fa-google"></i> Sign In with Google
				</button>
			</div>
		</div>
	);
}

export default Login;
