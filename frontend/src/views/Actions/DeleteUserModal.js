import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import DeleteUser from './DeleteUser'; // Import DeleteUser component

const DeleteUserModal = (props) => {
    const [showModal, setShowModal] = useState(false);

    const toggle = () => setShowModal(!showModal);

    const handleDelete = () => {
        if (props.onDelete)
            props.onDelete();
            toggle();
    };

    const handleCancel = () => {
        toggle();
    };

    return (
        <span>
            <Button type="button" className="float-right" size="sm" color="danger" onClick={toggle}>
                Delete User
            </Button>
            <Modal isOpen={showModal} toggle={toggle}>
                <ModalHeader>Delete User</ModalHeader>
                <ModalBody>
                    <DeleteUser userId={props.userId} onDelete={handleDelete} onCancel={handleCancel} />
                </ModalBody>
            </Modal>
        </span>
    );
};

export default DeleteUserModal;
