import React, { useEffect, useState } from 'react';
import Api from '../Api/Api';
const Home = () => {
    const [message, setMessage] = useState('');
    const [message2, setMessage2] = useState('');

    useEffect(() => {
        main();
    }, [])
    const main = async () => {
        (async () => {
            try {
                let allUsers = await Api.getAllUsers();
                let message = JSON.stringify(allUsers);

                setMessage(message);

                let allEvents = await Api.getAllEvents();
                let message2 = JSON.stringify(allEvents);

                setMessage2(message2);
            } catch (error) {
                console.error('Error in example usage:', error);
            }
        })();
    };
    
    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the Home page!</p>
            <p>{message}</p>
            <p>{message2}</p>
        </div>
    );
};

export default Home;
