import React, { useState, useEffect } from 'react';

import DeleteUserModal from './Actions/DeleteUserModal'
import Api from '../Api/Api';

const Profile = (props) => {
    const [user, setUser] = useState(null);
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [updateMessage, setUpdateMessage] = useState('');
    const [fetchMessage, setFetchMessage] = useState('');

    useEffect(() => {
        // Fetch user data when component mounts
        fetchUser(props.userId);
    }, [props.userId]);

    const fetchUser = async (userId) => {
        try {
            const userData = await Api.getUserById(userId);
            setUser(userData);
            setFetchMessage('User data fetched successfully.');
        } catch (error) {
            console.error('Error fetching user:', error);
            setFetchMessage('Error fetching user data.');
        }
    };

    const handleAction = () => {
        fetchUser(props.userId);
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value);
        handleAction();
    };

    const handleEmailChange = (event) => {
        setNewEmail(event.target.value);
        handleAction();
    };

    const handlePasswordChange = (event) => {
        setNewPassword(event.target.value);
        handleAction();
    };

    const handleDelete = () => {
        setUser(null)
        setNewName('')
        setNewEmail('')
        setNewPassword('')
        setUpdateMessage('')
        setFetchMessage('')
        handleAction();
    }

    const handleUpdateProfile = async () => {
        try {
            if (!newName && !newEmail && !newPassword) {
                setUpdateMessage('Please enter at least one field to update.');
                return;
            }

            const updatedUser = {
                ...user,
                name: (newName === '') || !newName ? user.name : newName,
                email: (newEmail === '') || !newEmail ? user.email : newEmail,
                password_hash: (newPassword === '') || !newPassword ? user.password : newPassword,
            };

            const response = await Api.updateUser(props.userId, updatedUser);
            setUser(response);
            setUpdateMessage('User profile updated successfully.');
            handleAction();
        } catch (error) {
            console.error('Error updating profile:', error);
            setUpdateMessage('Error updating user profile.');
        }
    };

    if (!user) {
        return (
            <div>
                <p>Loading...</p>
                <strong>Please make sure you are logged in.</strong>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <div className="profile-info">
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
            <div className="profile-form">
                <h3>Update Profile</h3>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={newName}
                    onChange={handleNameChange}
                    placeholder="New Name"
                />
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="text"
                    value={newEmail}
                    onChange={handleEmailChange}
                    placeholder="New Email"
                />
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    value={newPassword}
                    onChange={handlePasswordChange}
                    placeholder="New Password"
                />
                <button onClick={handleUpdateProfile}>Update Profile</button>
                <p>{updateMessage}</p>
            </div>
            <div>
                <DeleteUserModal userId={props.userId} onDelete={handleDelete} ></DeleteUserModal>
            </div>
            <div className="profile-messages">
                <h3>Fetch Message</h3>
                <p>{fetchMessage}</p>
            </div>
        </div>
    );
};

export default Profile;
