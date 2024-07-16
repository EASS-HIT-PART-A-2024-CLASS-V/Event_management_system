import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PendingInvitations from './PendingInvitations'; // Import PendingInvitations component

const PendingInvitationsModal = ({ userId }) => {
    const [showModal, setShowModal] = useState(false);

    const toggle = () => setShowModal(!showModal);

    return (
        <span>
            <Button type="button" className="float-right" size="sm" color="info" onClick={toggle}>
                View Pending Invitations
            </Button>
            <Modal isOpen={showModal} toggle={toggle} size="lg">
                <ModalHeader>Pending Invitations</ModalHeader>
                <ModalBody>
                    <PendingInvitations userId={userId} />
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

export default PendingInvitationsModal;
