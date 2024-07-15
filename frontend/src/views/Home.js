// Home.js
import React, { useState } from 'react';
import Api from '../Api/Api';
const Home = () => {
    const [message, setMessage] = useState('');
    const [message1, setMessage1] = useState('');
    const [message2, setMessage2] = useState('');

    const main = async () => {
        let obj = await Api.getAllUsers();
        let jsonString = JSON.stringify(obj)
        setMessage(jsonString)
        let obj1 = await Api.updateUser(1,);
        setMessage1(JSON.stringify(obj1))
        let obj2 = await Api.getAllUsers();
        setMessage2(JSON.stringify(obj2))
    }
    main();
    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the Home page!</p>
            <p>{message}</p>
            <p>{message1}</p>
            <p>{message2}</p>
        </div>
    );
};

export default Home;
