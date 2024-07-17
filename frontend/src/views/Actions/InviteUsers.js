import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem } from 'reactstrap';
import Api from '../../Api/Api';

const InviteUsers = ({ eventId }) => {
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await Api.getAllUsers();
                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching users:', error);
                // Handle error (e.g., show error message)
            }
        };

        fetchUsers();
    }, []);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleUserToggle = (userId) => {
        const isSelected = selectedUsers.includes(userId);
        if (isSelected) {
            setSelectedUsers(selectedUsers.filter(id => id !== userId));
        } else {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };

    const handleInviteUsers = () => {
        // Logic to send invitations for selectedUsers for eventId
        console.log('Inviting users:', selectedUsers);
        // You can implement the invitation logic here using Api.createInvitation or any appropriate method
        // For simplicity, let's assume it logs to console for now
    };

    const filteredUsers = users.filter(user => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(filter.toLowerCase());
    });

    return (
        <div>
            <h2>Invite Users to Event</h2>
            <Form>
                <FormGroup>
                    <Label for="filter">Filter Users</Label>
                    <Input
                        type="text"
                        name="filter"
                        id="filter"
                        placeholder="Type to filter users..."
                        value={filter}
                        onChange={handleFilterChange}
                    />
                </FormGroup>
            </Form>
            <ListGroup>
                {filteredUsers.map(user => (
                    <ListGroupItem
                        key={user.id}
                        onClick={() => handleUserToggle(user.id)}
                        active={selectedUsers.includes(user.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        {user.firstName} {user.lastName}
                    </ListGroupItem>
                ))}
            </ListGroup>
            <Button color="primary" onClick={handleInviteUsers} style={{ marginTop: '10px' }}>
                Invite Selected Users
            </Button>
        </div>
    );
};

export default InviteUsers;
