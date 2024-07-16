import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import CreateEvent from './CreateEvent';

const CreateEventModal = (props) => {
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal);

    const onClickCreate = () => {
        toggle()
    }

    const handleCreateEvent = () => {
        if (props.onCreate)
            props.onCreate()
        toggle()
    }

    return (
        <span>
            <Button type="button" className="float-right" size="sm" color="primary" onClick={onClickCreate} outline={true}>Create Event</Button>
            {
                <Modal isOpen={showModal} toggle={toggle} size="lg">
                    <ModalHeader>Create a new Event</ModalHeader>
                    <ModalBody>
                        <CreateEvent onSubmit={handleCreateEvent} userId={props.userId} onCancel={toggle} />
                    </ModalBody>
                </Modal>
            }
        </span>
    );
}

export default CreateEventModal;
