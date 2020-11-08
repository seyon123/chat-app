import React, { useState, useEffect } from 'react'
import './Room.css'


function Room({name}) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    return (
        <div className="room">
            <img className="avatar" src={`https://avatars.dicebear.com/api/gridy/${seed}.svg`} alt={name}/> 
            <div className="roomInfo">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
    )
}

export default Room