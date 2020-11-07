import {FormControl, InputLabel, Input, IconButton } from "@material-ui/core";
import React, { useState, useEffect} from 'react';
import Message from './Message';
import Header from './Header'
import "./App.css";
import { db } from "./firebase";
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
	const [message, setMessage] =  useState('');
	const [messages, setMessages] = useState([{}]);
	const [{user}, dispatch] = useStateValue();

	useEffect(() => {

		const btnToggle = document.querySelector("#modeToggle i");
        const theme = localStorage.getItem("theme");

        if (theme === "light") {
            btnToggle.classList.add("fa-sun");
            btnToggle.style.padding = "4px 3.8px";
            btnToggle.classList.remove("fa-moon");
            document.querySelector("body").classList.add(theme);
        }

        btnToggle.addEventListener("click", () => {
            if (btnToggle.classList.contains("fa-moon")) {
                btnToggle.classList.add("fa-sun");
                btnToggle.style.padding = "4px 3.8px";
                btnToggle.classList.remove("fa-moon");
                localStorage.setItem("theme", "light");
            } else {
                btnToggle.classList.add("fa-moon");
                btnToggle.classList.remove("fa-sun");
                btnToggle.style.padding = "4px 5px";
                localStorage.clear();
            }
            document.querySelector("body").classList.toggle("light");
        });

		db.collection('messages')
		.orderBy('timestamp', 'asc')
		.onSnapshot(snapshot => {
			setMessages(snapshot.docs.map(doc => doc.data()))
		});
	}, [])
	

	const sendMessage = (event) => {
		event.preventDefault();
		db.collection('messages').add({
			message: message,
			user: user.displayName,
			image: user.photoURL,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		});
		setMessage('');
	}

	return (
		<div className="App">
			{user ?
				<>
					<Header/>
					
					<h2 className="welcome">Welcome <img className="avatar" src={user.photoURL} alt={user.displayName} /> {user.displayName}</h2>
					<form className='form'>
						<FormControl className="formcontrol">
							<InputLabel>Type a message...</InputLabel>
							<Input className="formmessage" value={message} onChange={event => setMessage(event.target.value)} />
							<IconButton className="formbutton" type='submit' disabled={!message} variant="contained" color="primary" onClick={sendMessage}><SendIcon/></IconButton>
						</FormControl>
					</form>
					<div className="appContent">
						{messages.map((message, id) => (
							<Message key={id} user={user} message={message}/>
						))}
						
					</div>
				</>
			: <><Header/><Login/></>
			}
			

		</div>
	);
}

export default App;
