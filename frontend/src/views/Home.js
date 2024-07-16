import React, { useEffect, useState } from 'react';
import Api from '../Api/Api';
const Home = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        main();
    }, [])
    const main = async () => {
        (async () => {
            try {
                let allUsers = await Api.getAllUsers();
                let message = JSON.stringify(allUsers);

                setMessage(message);
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
        </div>
    );
};

export default Home;
