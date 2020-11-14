import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import './Room.css'


function Room({id, name, addNewRoom}) {
    const [messages, setMessages] = useState('');

    useEffect(() => {
        if (id) {
            db.collection('rooms')
            .doc(id).collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => 
                setMessages(snapshot.docs.map((doc) => 
                    doc.data()
                ))
            );
        }
        
    }, [id])
    
    const createRoom = () => {
        const roomName = prompt("Enter a name for the room");
        if (roomName) {
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }

    return !addNewRoom ? (
        <Link to={`/chat/${id}`}>
            <div className="room">
                <img className="avatar" src={`https://avatars.dicebear.com/api/gridy/${id}.svg`} alt={name}/> 
                <div className="roomInfo">
                    <h2>{name}</h2>
                    <p>{messages[0] ? `${(messages[0].user).split(' ')[0]}: ` : ""}{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
      <div className="room" onClick={createRoom}>
          <h4>Add New Room  <i className="fas fa-plus-circle"></i> </h4>
      </div>
    )
}

export default Room