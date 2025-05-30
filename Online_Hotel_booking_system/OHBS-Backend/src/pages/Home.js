import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles.css'; // Updated import statement

const Home = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/hotels')
            .then(response => {
                console.log('Hotels data:', response.data); // ← Add this line
                setHotels(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the hotels!', error);
            });
    }, []);
    
    return (
        <div className="container">
            <h2>Welcome to the Online Hotel Booking System</h2>
            <p>Search for hotels, book rooms, and manage your reservations.</p>
            
            <div>
                <h3>Available Hotels</h3>
                <ul className="room-list">
                    {hotels.map((hotel) => (
                        <li key={hotel.id} className="room-card">
                            <h3>{hotel.name}</h3>
                            <p>{hotel.description}</p>
                            <p>{hotel.location}</p>
                            <Link to={`/room-booking/${hotel.id}`}>
                                <button className="btn">Book a Room</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
