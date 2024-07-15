// Signup.js

import React, { useState } from 'react';
import Api from '../Api/Api';
import './Signup.css'; // Importing the CSS file for styling

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const user = {
                username: username,
                email: email,
                password_hash: password,
                name: name
            };
            const response = await Api.createUser(user);

            if (response) {
                setMessage('User successfully registered!');
            } else {
                setMessage('Failed to register user. Please try again.');
            }
        } catch (error) {
            console.error('Error registering user:', error);
            setMessage('Failed to register user. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <table className="form-table">
                    <tbody>
                        <tr>
                            <td>
                                <label>Username:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Email:</label>
                            </td>
                            <td>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Password:</label>
                            </td>
                            <td>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Name:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Signup</button>
            </form>
            <p className="message">{message}</p>
        </div>
    );
};

export default Signup;
