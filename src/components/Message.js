import React, { useRef, useEffect, } from "react";
import "./Message.css";

const Message = ({ message, user }) => {
	const checkUser = user.photoURL === message.image;
	console.log(message);

	const divRef = useRef(null);

	function convertTime(date){
		const today = new Date();
		const yesterday = new Date(today);
		yesterday.setDate(yesterday.getDate() - 1);
		
		if(date.getDate() === today.getDate() &&  date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()){
			return `Today at ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
		}

		else if(date.getDate() === yesterday.getDate() &&  date.getMonth() === yesterday.getMonth() && date.getFullYear() === yesterday.getFullYear()){
			return `Yesterday at ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
		}

		else{
			return date.toLocaleDateString();
		}
	}

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
			{!checkUser ? <div className="messageHeader"> {convertTime(new Date(message.timestamp?.toDate()))}</div> : ""}
		</div>
	);
}

export default Message;
