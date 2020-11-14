import React, { useState } from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import logo from './favicon.png'

function Login() {
	// eslint-disable-next-line
	const [state, dispatch] = useStateValue();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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

	const signInEmail = (e) => {
		e.preventDefault();

		auth.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: auth.user,
				}
				);
				console.log(auth);
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();

		auth.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: auth.user,
				});
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<div className="loginContainer">
				<img src={logo} width="150" alt="logo" />
				<h1>Sign in to Message Me</h1>

				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						type="submit"
						onClick={signInEmail}
						className="loginSignInButton"
					>
						Sign In
					</button>
				</form>
				
				<button className="register loginRegisterButton" onClick={register}>
					Create your MessageMe Account
				</button>
				<br/><h5>OR</h5>
				<button onClick={signIn}>
					<i className="fab fa-google"></i> Sign In with Google
				</button>

				<p>
					Disclaimer: This is an unmonitored messaging app and is created for demostration purposes only. If you want to try this app without giving your information use email: <b>demo@demo.com</b> and <b>Demo123</b> as password.
				</p>
			</div>
		</div>
	);
}

export default Login;
