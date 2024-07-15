// Home.js
import React, { useState } from 'react';
import Api from '../Api/Api';
const Home = () => {
    const [message, setMessage] = useState('');
    const [message1, setMessage1] = useState('');
    const [message2, setMessage2] = useState('');

    const main = async () => {
        const updateUserEmail = async (userId, newEmail) => {
            try {
                // Fetch the user by userId first
                let user = await Api.getUserById(userId);
                user = JSON.parse(user); // Parse the JSON response

                // Update the email field
                user.email = newEmail;

                // Call updateUser function to update the user
                const updatedUser = await Api.updateUser(userId, user);

                return updatedUser; // Return the updated user object
            } catch (error) {
                console.error('Error updating user email:', error);
                throw error;
            }
        };

        // Example usage:
        (async () => {
            try {
                // Step 1: Fetch all users
                let allUsers = await Api.getAllUsers();
                let message = JSON.stringify(allUsers); // Store the fetched users in message
                console.log('Message:', message);

                // Step 2: Update user with id 1's email
                const updatedUser = await updateUserEmail(3, 'newemail@example.com');
                let message1 = JSON.stringify(updatedUser); // Store the updated user in message1
                console.log('Message 1:', message1);

                // Step 3: Fetch all users again after update
                let allUsersAfterUpdate = await Api.getAllUsers();
                let message2 = JSON.stringify(allUsersAfterUpdate); // Store the updated users in message2
                console.log('Message 2:', message2);

                // Now you can use setMessage, setMessage1, and setMessage2 as needed
                setMessage(message);
                setMessage1(message1);
                setMessage2(message2);
            } catch (error) {
                console.error('Error in example usage:', error);
            }
        })();

    };
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
