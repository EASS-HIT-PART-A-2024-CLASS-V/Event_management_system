import React from 'react';
import './Contact.css'; // Import CSS for Contact component

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <p>
                Have questions or need assistance? Feel free to reach out!
            </p>
            <table className="contact-table">
                <tbody>
                    <tr>
                        <td style={{ paddingRight: '1rem' }}><strong>Name:</strong></td>
                        <td>Rottem Dresler</td>
                    </tr>
                    <tr>
                        <td><strong>ID:</strong></td>
                        <td>209207398</td>
                    </tr>
                    <tr>
                        <td><strong>Email:</strong></td>
                        <td><a href="mailto:rottem1357@gmail.com">rottem1357@gmail.com</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Contact;
