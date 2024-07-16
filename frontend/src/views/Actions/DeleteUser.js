import React, { useState } from 'react';
import Api from '../../Api/Api';

const DeleteUser = (props) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState(null);

    const handleDelete = async () => {
        console.log(props.userId)
        if (!props.onDelete) {
            console.log('on delete function does not exist');
            return;
        }
        try {
            setIsDeleting(true);
            const response = await Api.deleteUser(props.userId);
            setIsDeleting(false);
            console.log('User deleted successfully:', response);
            props.onDelete();
        } catch (error) {
            setIsDeleting(false);
            setDeleteError(error.message || 'Failed to delete user');
            console.error('Error deleting user:', error);
        }
    };

    const handleCancel = () => {
        if (!props.onCancel) {
            console.log('on cancel function does not exist');
            return;
        }
        props.onCancel();
        console.log('Deletion canceled');
    };

    return (
        <div>
            <h2>Delete User</h2>
            <p>Are you sure you want to delete this user?</p>
            {deleteError && <p style={{ color: 'red' }}>{deleteError}</p>}
            <button onClick={handleDelete} disabled={isDeleting}>
                {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
            <button onClick={handleCancel} disabled={isDeleting}>
                Cancel
            </button>
        </div>
    );
};

export default DeleteUser;
