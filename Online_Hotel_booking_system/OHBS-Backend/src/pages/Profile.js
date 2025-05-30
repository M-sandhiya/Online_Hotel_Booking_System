import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Retrieve user data from localStorage
        const userData = JSON.parse(localStorage.getItem('user'));

        if (userData) {
            setUser(userData);
        } else {
            console.error("No user data found in localStorage.");
        }
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            {/* Add more user details as per your API response */}
        </div>
    );
};

export default Profile;
