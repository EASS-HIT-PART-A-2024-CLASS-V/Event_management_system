import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Api from '../../Api/Api';
import './CreateEvent.css'; 

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
        if (!props.onSubmit) {
            console.log("on submit function does not exist")
            return;
        }

        try {
            const now = new Date();
            const formattedDate = now.toISOString();

            const updatedFormData = {
                ...formData,
                created_at: formattedDate,
            };

            const response = await Api.createEvent(updatedFormData);
            if (response) {
                console.log("success. Event created.");
                props.onSubmit();
                resetForm();
            } else {
                console.log('Failed to create event. Please try again.');
            }
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleCancel = () => {
        if (!props.onCancel) {
            console.log("on cancel function does not exist")
            return;
        }
        resetForm();
        props.onCancel();
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            location: '',
            start_time: '',
            end_time: '',
            created_by: props.userId,
            is_open: true,
            created_at: '',
        });
    };

    return (
        <div className="create-event-modal">
            <h3>Create Event</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        name="location"
                        className="form-control"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="start_time">Start Time:</label>
                    <input
                        type="datetime-local"
                        name="start_time"
                        className="form-control"
                        value={formData.start_time}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="end_time">End Time:</label>
                    <input
                        type="datetime-local"
                        name="end_time"
                        className="form-control"
                        value={formData.end_time}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="is_open">Is Open:</label>
                    <input
                        type="checkbox"
                        name="is_open"
                        checked={formData.is_open}
                        onChange={handleChange}
                    />
                </div>
                <div className="button-group">
                    <Button color="primary" name="create" onClick={handleSubmit}>
                        Create
                    </Button>
                    <Button color="secondary" name="cancel" onClick={handleCancel}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreateEvent;
