// src/pages/RoomList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/rooms')
      .then(response => {
        setRooms(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the rooms!", error);
      });
  }, []);

  return (
    <div>
      <h2>Room List</h2>
      {rooms.length > 0 ? (
        <ul>
          {rooms.map(room => (
            <li key={room.id}>{room.name}</li>
          ))}
        </ul>
      ) : (
        <p>No rooms available.</p>
      )}
    </div>
  );
};

export default RoomList;
