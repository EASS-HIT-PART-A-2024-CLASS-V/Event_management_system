
import React, { useState } from 'react';
import { Button } from 'reactstrap';

import Api from '../../Api/Api';


const CreateEvent = (props) => {
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

    const handleSubmit = async () => {
        try {
            const now = new Date();
            const formattedDate = now.toISOString();

            const updatedFormData = {
                ...formData,
                created_at: formattedDate,
            };

            const event = JSON.stringify(updatedFormData);
            const response = await Api.CreateEvent(event)
            if (response) {
                console.log("succes. event created.")
            } else {
                console.log('Failed to register user. Please try again.');
            }

            setFormData(updatedFormData)

            if (!props.onSubmit) {
                return;
            }
            props.onSubmit(updatedFormData)
        }
        catch (error) {
            console.error('Error registering user:', error);
        }
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }))
    };

    return (
        <div>
            <table>
                <tbody>
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
                                type="datetime-local"
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
                                type="datetime-local"
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
            <Button color="primary" name="create" onClick={handleSubmit}>
                create
            </Button>
            {' '}
            <Button color="secondary" name="cancel" onClick={handleSubmit}>
                Cancel
            </Button>
        </div>
    );
};
export default CreateEvent;
