import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Get the user data from localStorage
        const userData = JSON.parse(localStorage.getItem('user'));
        console.log('User Data from localStorage:', userData);

        // Check if user data exists in localStorage
        if (userData && userData.id) {
            // Directly use the data from localStorage for now
            setUser(userData); 
        } else {
            setErrorMessage('No user data found!');
        }
    }, []);

    if (errorMessage) {
        return <div>{errorMessage}</div>;
    }

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
