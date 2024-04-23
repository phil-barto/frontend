import { DataGrid } from '@mui/x-data-grid';
import fake_data from '../../utils/tmp_status';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

import React, { useState } from 'react';



const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'created_at', headerName: 'Created At', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
];

const AdminPage = () => {
    const [selectedRow, setSelectedRow] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    const handleRowSelection = (newSelection) => {
        console.log(newSelection)
        setSelectedRow(newSelection);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div style={{ height: 300, width: '100%' }}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpenDialog}
                disabled={!selectedRow}
                style={{ position: 'absolute', top: 10, right: 10, zIndex: 100 }}
            >
                Show Details
            </Button>
            <DataGrid
                rows={fake_data}
                columns={columns}
                checkboxSelection
                selectionModel={selectedRow}
                onRowSelectionModelChange={handleRowSelection}
            />
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Row Details</DialogTitle>
                <DialogContent>
                    {selectedRow && (
                        <div>
                            <p>ID: {selectedRow}</p>
                            {/* Render other details of the selected row */}
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AdminPage;