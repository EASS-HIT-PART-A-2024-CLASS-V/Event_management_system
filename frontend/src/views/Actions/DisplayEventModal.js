import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DisplayEvent from './DisplayEvent'; // Import DisplayEvent component

const DisplayEventModal = ({ eventId }) => {
    const [showModal, setShowModal] = useState(false);

    const toggle = () => setShowModal(!showModal);

    return (
        <span>
            <Button type="button" className="float-right" size="sm" color="info" onClick={toggle}>
                View Event
            </Button>
            <Modal isOpen={showModal} toggle={toggle} size="lg">
                <ModalHeader>Event Details</ModalHeader>
                <ModalBody>
                    <DisplayEvent eventId={eventId} />
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

export default DisplayEventModal;
