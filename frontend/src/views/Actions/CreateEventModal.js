import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import CreateEvent from './CreateEvent';

const CreateEventModal = (props) => {
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal);

    const onClickCreate = () => {
        toggle()
    }

    const handleCreateEvent = (event) => {
        if (props.onCreate)
            props.onCreate(event)
        toggle()
    }

    return (
        <span>
            <Button type="button" className="float-right" size="sm" color="primary" onClick={onClickCreate} outline={true}>Create Event</Button>
            {
                <Modal isOpen={showModal} toggle={toggle} size="lg">
                    <ModalHeader>Create a new Event</ModalHeader>
                    <ModalBody>
                        <CreateEvent/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>
                            Do Something
                        </Button>{' '}
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            }
        </span>
    );
}

export default CreateEventModal;
