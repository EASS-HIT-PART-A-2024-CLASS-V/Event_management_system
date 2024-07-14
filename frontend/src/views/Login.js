// Login.js

import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
        // You can use 'username' and 'password' state values
        console.log('Logging in...');
    };

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Username:</td>
                        <td>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleLogin}>Login</button>
            <p>Not signed up yet? <a href="/Signup">Sign up here!</a></p>
        </div>
    );
};

export default Login;
