import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import moment from 'moment';
import Api from '../../Api/Api';

const DisplayEvent = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        title: props.event.title,
        description: props.event.description,
        start: props.event.start,
        end: props.event.end,
        location: props.event.location,
    });

    useEffect(() => {
        setFormData({
            title: props.event.title,
            description: props.event.description,
            start: props.event.start,
            end: props.event.end,
            location: props.event.location,
        });
    }, [props.event]);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleCancel = () => {
        if (!props.onCancel) {
            console.log("on cancel function does not exist")
            return;
        }
        setEditMode(false);
        setFormData({
            title: props.event.title,
            description: props.event.description,
            start: props.event.start,
            end: props.event.end,
            location: props.event.location,
        });
        props.onCancel();
    };

    const handleSubmit = async (e) => {
        if (!props.onChange) {
            console.log("on change function does not exist")
            return;
        }
        e.preventDefault();
        try {
            const transformedEvent = transformEventForApi(formData);
            const updatedEvent = await Api.updateEvent(props.event._id, transformedEvent);
            console.log('Event updated successfully:', updatedEvent);
        } catch (error) {
            console.error('Error updating event:', error);
        }
        setEditMode(false);
        props.onChange()
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'start' || name === 'end') {
            const formattedValue = moment(value).format('YYYY-MM-DDTHH:mm');
            setFormData({
                ...formData,
                [name]: formattedValue,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const transformEventForApi = (eventData) => {
        const {title, start, end, description, location } = eventData;

        const start_time = moment(start).toISOString();
        const end_time = moment(end).toISOString();     

        const formattedEvent = {
            title: title,
            description: description || null, 
            location: location || null,
            start_time: start_time,
            end_time: end_time, 
        };

        return formattedEvent;
    };


    if (!props.event) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            {editMode ? (
                <Form>
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
                        <Label for="start">Start Date</Label>
                        <Input
                            type="datetime-local" 
                            name="start"
                            id="start"
                            value={formData.start}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="end">End Date</Label>
                        <Input
                            type="datetime-local" 
                            name="end"
                            id="end"
                            value={formData.end}
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

                    <Button type="submit" color="primary" onClick={handleSubmit} >
                        Save Changes
                    </Button>{' '}
                    <Button color="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                </Form>
            ) : (
                <div>
                        <h2>{props.event.title}</h2>
                        <p>Description: {props.event.description}</p>
                        <p>Start Date: {new Date(props.event.start).toLocaleString()}</p>
                        <p>End Date: {new Date(props.event.end).toLocaleString()}</p>
                        <p>Location: {props.event.location}</p>
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
