import ResponseModal from '../components/response-modal';
import StatusModal from '../components/status-modal';
import { Button, Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

import { useRouter } from 'next/router'
import React, { useState } from 'react';
import Navbar from '../components/nav-bar';

export async function getStaticProps() {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        const response = await fetch('https://full-stack-rxsb.onrender.com/support_ticket', requestOptions);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        console.log(result);
        return {
            props: {
                tickets: result,
            }
        }
    } catch (error) {
        console.log(error);
        return {
            props: {
                tickets: {},
            }
        }
    }
}

const AdminPage = ({ tickets }) => {
    const setTicket = (newTickets) => {
        tickets = newTickets
    }
    const [showResponseModal, setShowResponseModal] = useState(false)
    const [selectedCustomer, setSelectedCustomer] = useState({
        firstName: '',
        lastName: '',
        id: ''
    })
    const [expandedRow, setExpandedRow] = useState(null)
    const [showEditModal, setShowEditModal] = useState(false)

    const handleAccordionChange = (rowId) => {
        if (rowId === expandedRow) {
            setExpandedRow(null);
        } else {
            setExpandedRow(rowId);
        }
    }

    const toggleStatusModal = (e, values) => {
        if (!showEditModal) {
            //This conditional fires when the "Respond" button is clicked. Values
            //will not be undefined and we can set the selected customer to the
            //customer clicked.
            setSelectedCustomer({
                firstName: values["first_name"],
                lastName: values["last_name"],
                id: values["id"]
            })
        }
        // refreshData()
        setShowEditModal(!showEditModal)
    }

    const toggleResponseModal = (e, values) => {
        if (!showResponseModal) {
            //This conditional fires when the "Respond" button is clicked. Values
            //will not be undefined and we can set the selected customer to the
            //customer clicked.
            setSelectedCustomer({
                firstName: values["first_name"],
                lastName: values["last_name"]
            })
        }
        setShowResponseModal(!showResponseModal)
    }


    return (
        <div>

            <Navbar>
            </Navbar>
            <div style={{ height: 300, width: '100%' }}>
                {
                    tickets.map((row) => (
                        <Accordion
                            key={row.id}
                            expanded={row.id === expandedRow}
                            onChange={() => handleAccordionChange(row.id)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel-${row.id}-content`}
                                id={`panel-${row.id}-header`}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Typography><b>Ticket Description: </b>{row.description}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography><b>Ticket Status: </b>{row.status}</Typography>
                                    </Grid>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                {/* Render your additional row content and buttons here */}
                                <Grid item xs={6}>
                                    <div>{`ID: ${row.id}`}</div>
                                    <div>{`Email: ${row.email}`}</div>
                                    <div>{`First Name: ${row.first_name}`}</div>
                                    <div>{`Last Name: ${row.last_name}`}</div>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" color="secondary" onClick={(e) => toggleResponseModal(e, row)}>Respond</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" color="secondary" onClick={(e) => toggleStatusModal(e, row)}>Change Status</Button>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }

                <ResponseModal
                    isOpen={showResponseModal}
                    onRequestClose={toggleResponseModal}
                    customer={selectedCustomer}
                />
                <StatusModal
                    isOpen={showEditModal}
                    //TODO change status to edit
                    onRequestClose={toggleStatusModal}
                    customer={selectedCustomer}
                />
            </div >
        </div>
    );
}

export default AdminPage;