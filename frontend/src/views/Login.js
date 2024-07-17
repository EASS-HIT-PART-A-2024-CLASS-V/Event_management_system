import React, { useState } from 'react';
import Api from '../Api/Api'; 

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("User does not exist");

    const handleLogin = async () => {
        if (!props.onLogin) {
            console.log("handlelogin function does not exist")
            return;
        }
        try {
            let responseUserId = await Api.getUserAuth(username, password);
            let message = ""
        
            if (responseUserId !== "-1"){
                props.onLogin(responseUserId);
                message = "you have logged in succesfully"                
            }
            else {
                message = "User does not exist"
            }
            setMessage(message)
        }
        catch (error) {
            console.error('Error fetching or processing users:', error);
        }
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
            <strong>{message}</strong>
            <div>
                <button onClick={handleLogin}>Login</button>
                <p>Not signed up yet? <a href="/Signup">Sign up here!</a></p>
            </div>
        </div>
    );
};

export default Login;
