import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DisplayEvent from './DisplayEvent'; 

const DisplayEventModal = ({ eventId, onClose }) => {
    const [showModal, setShowModal] = useState(false);

    const toggle = () => setShowModal(!showModal);

    useEffect(() => {
    }, [eventId])

    const handleChanges = () => {
        if (!onClose) {
            console.log("function on close does not exist")
            return;
        }
        onClose(true)
    }

    const handleCancel = () => {
        if (!onClose) {
            console.log("function on close does not exist")
            return;
        }
        onClose(false)
    }

    return (
        <span>
            <Button type="button" className="float-right" size="sm" color="info" onClick={toggle}>
                View Event
            </Button>
            <Modal isOpen={showModal} toggle={toggle} size="lg">
                <ModalHeader>Event Details</ModalHeader>
                <ModalBody>
                    <DisplayEvent eventId={eventId} onCancel={handleCancel} onChange={handleChanges} />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle} >
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </span>
    );
};

export default DisplayEventModal;
