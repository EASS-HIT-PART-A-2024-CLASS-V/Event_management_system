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
    const [events, setEvents] = useState([])
    const [eventsDisplay, setEventsDisplay] = useState([])
    const [change, setChange] = useState(0)
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        console.log("provoked")
        const fetchEventsByUserId = async () => {
            try {
                if (props.userId === "-1") {
                    console.log("Please make sure to log in to see your events");
                    setEvents([]);
                    return;
                }

                const fetchedEvents = await Api.getEventByUserId(props.userId);
                const transformedEvents = transformEventsForCalendar(fetchedEvents);
                setEvents(fetchedEvents);
                setEventsDisplay(transformedEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEventsByUserId();
    }, [props.userId, change]);

    const transformEventsForCalendar = (events) => {
        return events.map(event => ({
            id: event._id,
            title: event.title,
            start: new Date(event.start_time),
            end: new Date(event.end_time),
            description: event.description,
            location: event.location,
        }));
    };

    const handleViewChange = (view) => {
        console.log(events)
        setView(view);
    };

    const handleEventsChanged = () => {
        setChange(change + 1)
    }

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    }

    const handleModalClose = () => {
        setSelectedEvent(null); // Reset selected event when modal is closed
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
            {selectedEvent && (
                <DisplayEventModal
                    eventId={selectedEvent.id} // Pass event ID to DisplayEventModal
                    isOpen={true} // Ensure modal is open when an event is selected
                    onClose={handleModalClose} // Handle modal close
                />
            )}
        </div>
    );
};

export default MyEvents;
