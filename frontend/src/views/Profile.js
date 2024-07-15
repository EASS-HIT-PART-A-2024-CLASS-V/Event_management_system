// Profile.js

import React, { useState, useEffect } from 'react';
import Api from '../Api/Api';

const Profile = (props) => {
    const [user, setUser] = useState(null);
    const [newEmail, setNewEmail] = useState('');
    const [updateMessage, setUpdateMessage] = useState('');
    const [fetchMessage, setFetchMessage] = useState('');

    useEffect(() => {
        // Fetch user data when component mounts
        fetchUser(props.userId);
    }, [props.userId]);

    const fetchUser = async (userId) => {
        try {
            const userData = await Api.getUserById(userId);
            setUser(JSON.parse(userData));
            setFetchMessage('User data fetched successfully.');
        } catch (error) {
            console.error('Error fetching user:', error);
            setFetchMessage('Error fetching user data.');
        }
    };

    const handleEmailChange = (event) => {
        setNewEmail(event.target.value);
    };

    const handleUpdateEmail = async () => {
        try {
            if (!newEmail) {
                setUpdateMessage('Please enter a new email.');
                return;
            }

            const updatedUser = { ...user, email: newEmail };
            const response = await Api.updateUser(props.userId, updatedUser);
            setUpdateMessage('User email updated successfully.');
            setUser(response); // Update the user state with the response
        } catch (error) {
            console.error('Error updating email:', error);
            setUpdateMessage('Error updating user email.');
        }
    };

    if (!user) {
        return <div>
            <p>
                Loading...
            </p>
            <strong>
                please make sure you are logged in
            </strong>
        </div>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <div>
                <p>ID: {user._id}</p>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
            <br />
            <div>
                <h3>Update Email</h3>
                <input
                    type="text"
                    value={newEmail}
                    onChange={handleEmailChange}
                    placeholder="New Email"
                />
                <button onClick={handleUpdateEmail}>Update Email</button>
                <p>{updateMessage}</p>
            </div>
            <br />
            <div>
                <h3>Fetch Message</h3>
                <p>{fetchMessage}</p>
            </div>
        </div>
    );
};

export default Profile;
