import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Api from './Api'; // Import your Api module

const DisplayEvent = ({ eventId }) => {
    const [event, setEvent] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        location: '',
        // Add more fields as per your event structure
    });

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const eventData = await Api.getEventById(eventId);
                setEvent(eventData);
                setFormData({
                    title: eventData.title,
                    description: eventData.description,
                    date: eventData.date,
                    location: eventData.location,
                    // Set more fields here
                });
            } catch (error) {
                console.error('Error fetching event:', error);
                // Handle error (e.g., show error message)
            }
        };

        fetchEvent();
    }, [eventId]);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleCancel = () => {
        setEditMode(false);
        // Reset form data to original event data
        setFormData({
            title: event.title,
            description: event.description,
            date: event.date,
            location: event.location,
            // Set more fields here
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform update API call here with formData
        try {
            const updatedEvent = await Api.updateEvent(eventId, formData);
            console.log('Event updated successfully:', updatedEvent);
            // Optionally, you can update local state or handle success feedback
        } catch (error) {
            console.error('Error updating event:', error);
            // Handle error (e.g., show error message)
        }
        setEditMode(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    if (!event) {
        return <div>Loading...</div>; // or any loading indicator
    }

    return (
        <div>
            {editMode ? (
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date">Date</Label>
                        <Input
                            type="date"
                            name="date"
                            id="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="location">Location</Label>
                        <Input
                            type="text"
                            name="location"
                            id="location"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    {/* Add more fields as per your event structure */}

                    <Button type="submit" color="primary">
                        Save Changes
                    </Button>{' '}
                    <Button color="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                </Form>
            ) : (
                <div>
                    <h2>{event.title}</h2>
                    <p>Description: {event.description}</p>
                    <p>Date: {event.date}</p>
                    <p>Location: {event.location}</p>
                    {/* Display more fields as needed */}
                    <Button color="info" onClick={handleEdit}>
                        Edit Event
                    </Button>
                </div>
            )}
        </div>
    );
};

export default DisplayEvent;
