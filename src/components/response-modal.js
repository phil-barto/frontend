// components/ResponseModal.js
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Box, Button, TextareaAutosize } from '@mui/material';

const ResponseModal = ({ isOpen, onRequestClose, customer }) => {
    const [response, setResponse] = useState('');

    const handleInputChange = (e) => {
        setResponse(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform any action with the response, like sending it to a server
        console.log('“Would normally send email here with body: ', response);
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
                <h2 id="response-modal-title">Respond to {customer}</h2>
                <form onSubmit={handleSubmit}>
                    <TextareaAutosize
                        value={response}
                        onChange={handleInputChange}
                        placeholder="Type your response here..."
                        rowsMin={6}
                        style={{ width: '100%' }}
                        required
                    />
                    <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                        Submit
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ResponseModal;
