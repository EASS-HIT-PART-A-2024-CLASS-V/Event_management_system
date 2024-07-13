import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CreateEventModal from './Actions/CreateEventModal';

const localizer = momentLocalizer(moment);

const MyEvents = () => {
    const [view, setView] = useState('month'); // Default view is month

    // Example events data (replace with actual data from backend later)
    const events = [
        {
            id: 1,
            title: 'Event 1',
            start: new Date(2024, 6, 1, 10, 0), // year, month (0-indexed), day, hour, minute
            end: new Date(2024, 6, 1, 12, 0),
        },
        {
            id: 2,
            title: 'Event 2',
            start: new Date(2024, 6, 2, 14, 0),
            end: new Date(2024, 6, 2, 16, 0),
        },
        {
            id: 3,
            title: 'Event 3',
            start: new Date(2024, 6, 3, 9, 0),
            end: new Date(2024, 6, 3, 11, 0),
        },
    ];

    const handleViewChange = (view) => {
        setView(view);
    };

    const CustomEvent = ({ event }) => {
        return (
            <div>
                {event.title} 
                <CreateEventModal />
            </div>
        );
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
