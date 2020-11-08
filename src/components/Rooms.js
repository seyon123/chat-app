import React, { useState, useEffect } from 'react'
import './Rooms.css'
import {db} from '../firebase'
import Room from './Room';

function Rooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        db.collection('rooms').orderBy('name', 'asc').onSnapshot(snapshot => (
			setRooms(snapshot.docs.map( doc => ({
                id: doc.id,
                data: doc.data(),
            }))
        )))
    }, [])

    return (
        <div className="rooms">
            {rooms.map(room => (
                <Room name={room.data.name}/>
            ))}
        </div>
    )
}

export default Rooms