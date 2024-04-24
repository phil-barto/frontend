import TextField from '@mui/material/TextField';

import styles from "../app/page.module.css"
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import { useState } from 'react';


const TicketForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        description: '',
        status: "New"
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async () => {
        try {
            console.log(formData)
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            const urlencoded = new URLSearchParams();
            urlencoded.append("first_name", formData.firstName);
            urlencoded.append("last_name", formData.lastName);
            urlencoded.append("description", formData.description);
            urlencoded.append("email", formData.email);
            urlencoded.append("status", "New");

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: urlencoded,
                redirect: "follow"
            };
            const response = await fetch("https://full-stack-rxsb.onrender.com:/support_ticket", requestOptions)

            if (!response.ok) {
                throw new Error("Network response was not ok")
            }

            console.log('Form submitted successfully');
            // Optionally, you can reset the form fields here
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                description: ''
            });
        } catch (error) {
            console.error('There was a problem submitting the form:', error);
        }
    };

    return (
        <FormControl className={styles.button}>
            <FormLabel>Enter First Name</FormLabel>
            <TextField name="firstName" value={formData.firstName} onChange={handleChange} />
            <FormLabel>Enter Last Name</FormLabel>
            <TextField name="lastName" value={formData.lastName} onChange={handleChange} />
            <FormLabel>Enter Email</FormLabel>
            <TextField name="email" value={formData.email} onChange={handleChange} />
            <FormLabel>Description</FormLabel>
            <TextField name="description" value={formData.description} onChange={handleChange} />
            <Button onClick={handleSubmit}>Submit</Button>
        </FormControl>
    )
}

export default TicketForm