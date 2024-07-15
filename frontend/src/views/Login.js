import React, { useState } from 'react';
import Api from '../Api/Api'; 

const Login = (props) => {
    console.log(props)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        if (!props.onLogin) {
            console.log("handlelogin function does not exist")
            return;
        }
        try {
            let usersString = await Api.getAllUsers();
            let usersObj = JSON.parse(usersString)

            usersObj.forEach(user => {
                let usernameTmp = user.username
                let passwordTmp = user.password_hash

                if (usernameTmp === username && passwordTmp === password) {
                    setMessage('User exists')
                    console.log(user._id)
                    props.onLogin(user._id);
                    console.log("User is logged in");
                    return;
                }
            })
            setMessage('User does not exist')
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
