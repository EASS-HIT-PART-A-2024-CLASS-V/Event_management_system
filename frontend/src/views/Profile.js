import React from 'react';

const Profile = ({ user }) => {
    return (
        <div>
            <h2>User Profile</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Username:</td>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>ID:</td>
                        <td>{user._id}</td>
                    </tr>
                    <tr>
                        <td>Created At:</td>
                        <td>{user.created_at}</td>
                    </tr>
                    {/* Add more properties as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default Profile;
