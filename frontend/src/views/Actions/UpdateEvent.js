
import React, { useState } from 'react';
import { Button } from 'reactstrap';

const UpdateEvent = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        start_time: '',
        end_time: '',
        created_by: props.userId,
        is_open: true,
        created_at: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/events/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Event created successfully!');
            } else {
                console.error('Error creating event');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td style={{ width: '33%' }}>
                            <label htmlFor="_id">Event ID:</label>
                        </td>
                        <td style={{ width: '67%' }}>
                            <input
                                type="text"
                                name="_id"
                                placeholder="Event ID"
                                value={formData._id}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: '33%' }}>
                            <label htmlFor="title">Title:</label>
                        </td>
                        <td style={{ width: '67%' }}>
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: '33%' }}>
                            <label htmlFor="description">Description:</label>
                        </td>
                        <td style={{ width: '67%' }}>
                            <input
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: '33%' }}>
                            <label htmlFor="location">Location:</label>
                        </td>
                        <td style={{ width: '67%' }}>
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: '33%' }}>
                            <label htmlFor="start_time">Start Time:</label>
                        </td>
                        <td style={{ width: '67%' }}>
                            <input
                                type="text"
                                name="start_time"
                                placeholder="Start Time"
                                value={formData.start_time}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: '33%' }}>
                            <label htmlFor="end_time">End Time:</label>
                        </td>
                        <td style={{ width: '67%' }}>
                            <input
                                type="text"
                                name="end_time"
                                placeholder="End Time"
                                value={formData.end_time}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: '33%' }}>
                            <label htmlFor="is_open">Is Open:</label>
                        </td>
                        <td style={{ width: '67%' }}>
                            <input
                                type="checkbox"
                                name="is_open"
                                checked={formData.is_open}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button color="primary" onClick={handleSubmit}>
                update
            </Button>
            {' '}
            <Button color="secondary" onClick={props.toggle}>
                Cancel
            </Button>
        </div>
    );
};

export default UpdateEvent;
