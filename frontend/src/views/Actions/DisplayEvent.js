import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import moment from 'moment';

import Api from '../../Api/Api';

const DisplayEvent = ({ eventId, onChange, onCancel }) => {
    const [eventDetails, setEventDetails] = useState(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const event = await Api.getEventById(eventId);
                setEventDetails({
                    ...event,
                    start: moment(event.start_time).format('YYYY-MM-DDTHH:mm'),
                    end: moment(event.end_time).format('YYYY-MM-DDTHH:mm'),
                });
            } catch (error) {
                console.error('Error fetching event:', error);
            }
        };

        if (eventId) {
            fetchEvent();
        } else {
            setEventDetails(null);
        }
    }, [eventId]);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleCancel = () => {
        setEditMode(false);
        setEventDetails({
            ...eventDetails,
            start: moment(eventDetails.start_time).format('YYYY-MM-DDTHH:mm'),
            end: moment(eventDetails.end_time).format('YYYY-MM-DDTHH:mm'),
        });
        onCancel && onCancel();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const transformedEvent = {
                ...eventDetails,
                start_time: moment(eventDetails.start).toISOString(),
                end_time: moment(eventDetails.end).toISOString(),
            };
            const updatedEvent = await Api.updateEvent(eventId, transformedEvent); // Adjust API call as per your API
            console.log('Event updated successfully:', updatedEvent);
            setEditMode(false);
            onChange && onChange();
        } catch (error) {
            console.error('Error updating event:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails({
            ...eventDetails,
            [name]: value,
        });
    };

    if (!eventDetails) {
        return <div>Loading...</div>;
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
                            value={eventDetails.title}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            value={eventDetails.description}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="start">Start Date</Label>
                        <Input
                            type="datetime-local"
                            name="start"
                            id="start"
                            value={eventDetails.start}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="end">End Date</Label>
                        <Input
                            type="datetime-local"
                            name="end"
                            id="end"
                            value={eventDetails.end}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="location">Location</Label>
                        <Input
                            type="text"
                            name="location"
                            id="location"
                            value={eventDetails.location}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <Button type="submit" color="primary">
                        Save Changes
                    </Button>{' '}
                    <Button color="secondary" onClick={() => { setEditMode(false); } }>
                        Cancel
                    </Button>
                </Form>
            ) : (
                <div>
                    <h2>{eventDetails.title}</h2>
                    <p>Description: {eventDetails.description}</p>
                    <p>Start Date: {moment(eventDetails.start_time).format('MMMM Do YYYY, h:mm a')}</p>
                    <p>End Date: {moment(eventDetails.end_time).format('MMMM Do YYYY, h:mm a')}</p>
                    <p>Location: {eventDetails.location}</p>

                    <Button color="info" onClick={handleEdit}>
                        Edit Event
                    </Button>
                    {/* Example for InviteUsersModal component */}
                    {/* <InviteUsersModal eventId={eventId} /> */}
                </div>
            )}
        </div>
    );
};

export default DisplayEvent;
