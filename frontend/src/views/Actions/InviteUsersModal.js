import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import InviteUsers from './InviteUsers'; // Import InviteUsers component

const InviteUsersModal = ({ eventId }) => {
    const [showModal, setShowModal] = useState(false);

    const toggle = () => setShowModal(!showModal);

    return (
        <span>
            <Button type="button" className="float-right" size="sm" color="info" onClick={toggle}>
                Invite Users
            </Button>
            <Modal isOpen={showModal} toggle={toggle} size="lg">
                <ModalHeader>Invite Users to Event</ModalHeader>
                <ModalBody>
                    <InviteUsers eventId={eventId} />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </span>
    );
};

export default InviteUsersModal;
