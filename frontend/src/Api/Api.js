const BASE_URL = 'http://localhost:3000';


///functions/////////////////////////////////////////////////////////////////
// Api.js

const getAllUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/users/`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

const getUserById = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/api/users/${userId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching user ${userId}:`, error);
        throw error;
    }
}

const getUserAuth = async (username, password) => {
    try {
        const props = { username, password };
        const propsJson = JSON.stringify(props); 

        const response = await fetch(`${BASE_URL}/api/users/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: propsJson 
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching user ${username}:`, error);
        throw error;
    }
}


const createUser = async (user) => {
    const userJson = JSON.stringify(user);

    try {
        console.log(userJson)
        const response = await fetch(`${BASE_URL}/api/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: userJson,
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

const updateUser = async (userId, user) => {
    try {
        const response = await fetch(`${BASE_URL}/api/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error updating user ${userId}:`, error);
        throw error;
    }
}

const deleteUser = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/api/users/delete/${userId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // Assuming the backend returns a boolean indicating success
    } catch (error) {
        console.error(`Error deleting user ${userId}:`, error);
        throw error;
    }
}

const getAllEvents = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/events/`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
}

const getEventById = async (eventId) => {
    try {
        const response = await fetch(`${BASE_URL}/api/events/${eventId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching event ${eventId}:`, error);
        throw error;
    }
}

const getEventByUserId = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/api/events_by_user/${userId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching event ${userId}:`, error);
        throw error;
    }
}

const createEvent = async (event) => {
    try {
        const response = await fetch(`${BASE_URL}/api/events/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating event:', error);
        throw error;
    }
}

const updateEvent = async (eventId, event) => {
    try {
        const response = await fetch(`${BASE_URL}/api/events/${eventId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error updating event ${eventId}:`, error);
        throw error;
    }
}

const deleteEvent = async (eventId) => {
    try {
        const response = await fetch(`${BASE_URL}/api/events/${eventId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // Assuming the backend returns a boolean indicating success
    } catch (error) {
        console.error(`Error deleting event ${eventId}:`, error);
        throw error;
    }
}

const getAllParticipants = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/participants/`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching participants:', error);
        throw error;
    }
}

const getParticipantById = async (participantId) => {
    try {
        const response = await fetch(`${BASE_URL}/api/participants/${participantId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching participant ${participantId}:`, error);
        throw error;
    }
}

const createParticipant = async (participant) => {
    try {
        const response = await fetch(`${BASE_URL}/api/participants/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(participant),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating participant:', error);
        throw error;
    }
}

const updateParticipant = async (participantId, participant) => {
    try {
        const response = await fetch(`${BASE_URL}/api/participants/${participantId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(participant),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error updating participant ${participantId}:`, error);
        throw error;
    }
}

const deleteParticipant = async (participantId) => {
    try {
        const response = await fetch(`${BASE_URL}/api/participants/${participantId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // Assuming the backend returns a boolean indicating success
    } catch (error) {
        console.error(`Error deleting participant ${participantId}:`, error);
        throw error;
    }
}

const getAllInvitations = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/invitations/`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching invitations:', error);
        throw error;
    }
}

const getInvitationById = async (invitationId) => {
    try {
        const response = await fetch(`${BASE_URL}/api/invitations/${invitationId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching invitation ${invitationId}:`, error);
        throw error;
    }
}

const createInvitation = async (invitation) => {
    try {
        const response = await fetch(`${BASE_URL}/api/invitations/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invitation),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating invitation:', error);
        throw error;
    }
}

const updateInvitation = async (invitationId, invitation) => {
    try {
        const response = await fetch(`${BASE_URL}/api/invitations/${invitationId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invitation),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error updating invitation ${invitationId}:`, error);
        throw error;
    }
}

const deleteInvitation = async (invitationId) => {
    try {
        const response = await fetch(`${BASE_URL}/api/invitations/${invitationId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // Assuming the backend returns a boolean indicating success
    } catch (error) {
        console.error(`Error deleting invitation ${invitationId}:`, error);
        throw error;
    }
}

///Declerations//////////////////////////////////////////////////////////////
const Api = {
    ///users/////////////////////////////////////////////////////////////////

    getAllUsers: async () => {
        let data = await getAllUsers()
        return data
    },

    getUserById: async (userId) => {
        let data = await getUserById(userId)
        return data
    },

    getUserAuth: async (username, password) => {
        let data = await getUserAuth(username, password)
        return data
    },

    createUser: async (user) => {
        let data = await createUser(user)
        return data
    },

    updateUser: async (userId, user) => {
        let data = await updateUser(userId, user)
        return data
    },

    deleteUser: async (userId) => {
        let data = await deleteUser(userId)
        return data
    },
    ///events/////////////////////////////////////////////////////////////////

    getAllEvents: async () => {
        let data = await getAllEvents()
        return data
    },

    getEventById: async (eventId) => {
        let data = await getEventById(eventId)
        return data
    },

    getEventByUserId: async (userId) => {
        let data = await getEventByUserId(userId)
        return data
    },

    createEvent: async (event) => {
        let data = await createEvent(event)
        return data
    },

    updateEvent: async (eventId, event) => {
        let data = await updateEvent(eventId, event)
        return data
    },

    deleteEvent: async (eventId) => {
        let data = await deleteEvent(eventId)
        return data
    },
    ///participants/////////////////////////////////////////////////////////////////

    getAllParticipants: async () => {
        let data = await getAllParticipants()
        return data
    },

    getParticipantById: async (participantId) => {
        let data = await getParticipantById(participantId)
        return data
    },

    createParticipant: async (participant) => {
        let data = await createParticipant(participant)
        return data
    },

    updateParticipant: async (participantId, participant) => {
        let data = await updateParticipant(participantId, participant)
        return data
    },

    deleteParticipant: async (participantId) => {
        let data = await deleteParticipant(participantId)
        return data
    },
    ///invitations/////////////////////////////////////////////////////////////////

    getAllInvitations: async () => {
        let data = await getAllInvitations()
        return data
    },

    getInvitationById: async (invitationId) => {
        let data = await getInvitationById(invitationId)
        let jsonString = JSON.stringify(data)
        return jsonString
    },

    createInvitation: async (invitation) => {
        let data = await createInvitation(invitation)
        return data
    },

    updateInvitation: async (invitationId, invitation) => {
        let data = await updateInvitation(invitationId, invitation)
        return data
    },

    deleteInvitation: async (invitationId) => {
        let data = await deleteInvitation(invitationId)
        return data
    },
};
export default Api;