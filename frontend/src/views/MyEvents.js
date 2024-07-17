import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import DisplayEventModal from './Actions/DisplayEventModal';
import CreateEventModal from './Actions/CreateEventModal';
import Api from '../Api/Api'; 

const localizer = momentLocalizer(moment);

const MyEvents = (props) => {
    const [view, setView] = useState('month'); // Default view is month
    const [eventsDisplay, setEventsDisplay] = useState([])
    const [change, setChange] = useState(0)
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        const fetchEventsByUserId = async () => {
            try {
                if (props.userId === "-1") {
                    console.log("Please make sure to log in to see your events");
                    return;
                }

                const fetchedEvents = await Api.getEventByUserId(props.userId);
                const transformedEvents = transformEventsForCalendar(fetchedEvents);
                setEventsDisplay(transformedEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEventsByUserId();
    }, [props.userId, change]);

    const transformEventsForCalendar = (events) => {
        return events.map(event => ({
            id: event.id,
            title: event.title,
            start: new Date(event.start_time),
            end: new Date(event.end_time),
            description: event.description,
            location: event.location,
            is_open: event.is_open,
        }));
    };

    const handleViewChange = (view) => {
        setView(view);
    };

    const handleEventsChanged = () => {
        setChange(change + 1)
    }

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    }

    const handleModalClose = (is_changed) => {
        if (is_changed) {
            handleEventsChanged();
        }
        setSelectedEvent(null);
    };

    return (
        <div>
            <h2>My Events</h2>
            <CreateEventModal onCreate={handleEventsChanged} userId={props.userId} />            
            <div style={{ height: '600px' }}>
                <Calendar
                    localizer={localizer}
                    events={eventsDisplay}
                    startAccessor="start"
                    endAccessor="end"
                    views={['day', 'week', 'month']}
                    view={view}
                    onView={handleViewChange}
                    onSelectEvent={handleEventClick}
                />
            </div>
            {selectedEvent && (<DisplayEventModal eventId={selectedEvent.id} onClose={handleModalClose} />)}
        </div>
    );
};

export default MyEvents;
