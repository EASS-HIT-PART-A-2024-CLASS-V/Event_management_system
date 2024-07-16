import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import Api from './Api'; // Import your Api module

const PendingInvitations = ({ userId }) => {
    const [invitations, setInvitations] = useState([]);

    useEffect(() => {
        const fetchPendingInvitations = async () => {
            try {
                const invitationsData = await Api.getInvitationsByUserId(userId);
                setInvitations(invitationsData.filter(invitation => invitation.status === 'pending'));
            } catch (error) {
                console.error('Error fetching pending invitations:', error);
                // Handle error (e.g., show error message)
            }
        };

        fetchPendingInvitations();
    }, [userId]);

    const handleAcceptInvitation = async (invitationId) => {
        try {
            const updatedInvitation = await Api.updateInvitation(invitationId, { status: 'accepted' });
            console.log('Invitation accepted:', updatedInvitation);
            // Optionally update UI to reflect the change
            setInvitations(invitations.map(invitation =>
                invitation.id === updatedInvitation.id ? updatedInvitation : invitation
            ));
        } catch (error) {
            console.error('Error accepting invitation:', error);
            // Handle error (e.g., show error message)
        }
    };

    const handleDeclineInvitation = async (invitationId) => {
        try {
            const updatedInvitation = await Api.updateInvitation(invitationId, { status: 'declined' });
            console.log('Invitation declined:', updatedInvitation);
            // Optionally update UI to reflect the change
            setInvitations(invitations.map(invitation =>
                invitation.id === updatedInvitation.id ? updatedInvitation : invitation
            ));
        } catch (error) {
            console.error('Error declining invitation:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div>
            <h2>Pending Invitations</h2>
            <ListGroup>
                {invitations.length > 0 ? (
                    invitations.map(invitation => (
                        <ListGroupItem key={invitation.id}>
                            <div>
                                <strong>Event Name: </strong>{invitation.eventName}
                            </div>
                            <div>
                                <strong>Invited By: </strong>{invitation.invitedBy}
                            </div>
                            <div>
                                <strong>Status: </strong>{invitation.status}
                            </div>
                            <div>
                                <Button color="success" onClick={() => handleAcceptInvitation(invitation.id)}>
                                    Accept
                                </Button>{' '}
                                <Button color="danger" onClick={() => handleDeclineInvitation(invitation.id)}>
                                    Decline
                                </Button>
                            </div>
                        </ListGroupItem>
                    ))
                ) : (
                    <ListGroupItem>No pending invitations</ListGroupItem>
                )}
            </ListGroup>
        </div>
    );
};

export default PendingInvitations;
