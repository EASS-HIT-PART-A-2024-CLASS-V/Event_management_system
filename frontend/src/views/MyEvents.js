import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CreateEventModal from './Actions/CreateEventModal';
import Api from '../Api/Api'; 

const localizer = momentLocalizer(moment);

const MyEvents = (props) => {
    const [view, setView] = useState('month'); // Default view is month
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchEventsByUserId = async () => {
            try {
                if (props.userId === "-1") {
                    console.log("Please make sure to log in to see your events");
                    setEvents([]);
                    return;
                }

                const fetchedEvents = await Api.getEventByUserId(props.userId);
                setEvents(fetchedEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEventsByUserId();
    }, [props.userId]);

    const handleViewChange = (view) => {
        console.log(events)
        setView(view);
    };

    return (
        <div>
            <h2>My Events</h2>
            <CreateEventModal />            
            <div style={{ height: '600px' }}>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    views={['day', 'week', 'month']}
                    view={view}
                    onView={handleViewChange}
                    onSelectEvent={(event) => console.log('Selected Event:', event)}
                />
            </div>
        </div>
    );
};

export default MyEvents;
