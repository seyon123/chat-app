import React, { useRef, useEffect, } from "react";
import "./Message.css";

const Message = ({ message, user }) => {
	const checkUser = user.photoURL === message.image;
	console.log(message);

	const divRef = useRef(null);

	useEffect(() => {
		divRef.current.scrollIntoView({ behavior: 'smooth' });
	}, []);

	return (
		<div ref={divRef} className={`message ${checkUser ? "messageUser" : ""}`}>
			<div className={checkUser ? "userCard" : "otherCard"}>
				<img className="avatar" src={message.image} alt={message.user} title={message.user}/>
				<div className="messageText">
				 {message.message}
				</div>
			</div>
			{!checkUser ? <div className="messageHeader"> {new Date(message.timestamp?.toDate()).toUTCString()}</div> : ""}
		</div>
	);
}

export default Message;
