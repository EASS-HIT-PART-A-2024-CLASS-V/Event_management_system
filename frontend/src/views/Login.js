import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../Api/Api';
import './Login.css'; // Assuming you will create a CSS file for styling

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!props.onLogin) {
            console.log("handleLogin function does not exist");
            return;
        }
        try {
            const responseUserId = await Api.getUserAuth(username, password);
            if (responseUserId !== "-1") {
                props.onLogin(responseUserId);
                setMessage("You have logged in successfully.");
                navigate("/MyEvents");
            } else {
                setMessage("User does not exist.");
            }
        } catch (error) {
            console.error('Error fetching or processing users:', error);
            setMessage("An error occurred while trying to log in.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="login-form">
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {message && <strong className="message">{message}</strong>}
                <button onClick={handleLogin} className="login-button">Login</button>
                <p>Not signed up yet? <a href="/Signup">Sign up here!</a></p>
            </div>
        </div>
    );
};

export default Login;
