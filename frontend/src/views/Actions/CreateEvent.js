
import React, { useState } from 'react';

const CreateEvent = (props) => {
    const [formData, setFormData] = useState({
        _id: '',
        title: '',
        description: '',
        location: '',
        start_time: '',
        end_time: '',
        created_by: '',
        is_open: true,
        created_at: '',
    });

    const handleSubmit = async () => {
        
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFormData({
            ...formData,
            [name]: checked
        });
    };

    return (
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
                            onChange={handleCheckboxChange}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default CreateEvent;
