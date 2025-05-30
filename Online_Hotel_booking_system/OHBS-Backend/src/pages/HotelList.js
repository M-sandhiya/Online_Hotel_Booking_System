// src/pages/HotelList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/hotels')
      .then(response => {
        setHotels(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the hotels!", error);
      });
  }, []);

  return (
    <div>
      <h2>Hotel List</h2>
      {hotels.length > 0 ? (
        <ul>
          {hotels.map(hotel => (
            <li key={hotel.id}>{hotel.name}</li>
          ))}
        </ul>
      ) : (
        <p>No hotels available.</p>
      )}
    </div>
  );
};

export default HotelList;
