import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import './Room.css'


function Room({id, name, addNewRoom}) {
    const [seed, setSeed] = useState('');
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
    
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

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
                <img className="avatar" src={`https://avatars.dicebear.com/api/gridy/${seed}.svg`} alt={name}/> 
                <div className="roomInfo">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
      <div className="room" onClick={createRoom}>
          <h3>Add New Chat  [+] </h3>
      </div>
    )
}

export default Room