// components/ResponseModal.js
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Box, Button, Select, MenuItem } from '@mui/material';


const StatusModal = ({ isOpen, onRequestClose, customer }) => {
    const [selectedStatus, setSelectedStatus] = useState('');

    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform any action with the response, like sending it to a server
        console.log('Submitting status to: ', selectedStatus);
        // Close the modal after submission
        onRequestClose();
    };

    return (
        <Modal
            open={isOpen}
            onClose={onRequestClose}
            aria-labelledby="response-modal-title"
            aria-describedby="response-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                <h2 id="response-modal-title">Select the new status for this ticket {customer}</h2>
                <form onSubmit={handleSubmit}>
                    <Select
                        value={selectedStatus}
                        onChange={handleStatusChange}
                        fullWidth
                        required
                    >
                        <MenuItem value={'new'}>New</MenuItem>
                        <MenuItem value={'in-progress'}>In Progress</MenuItem>
                        <MenuItem value={'resolved'}>Resolved</MenuItem>
                    </Select>
                    <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                        Submit
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default StatusModal;
