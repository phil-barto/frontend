import TextField from '@mui/material/TextField';

import styles from "../app/page.module.css"
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';

const TicketForm = () => {

    const handleSubmit = () => {
        console.log("Form submitted")
    }

    return (
        <FormControl className={styles.button}>
            <FormLabel>Enter First Name</FormLabel>
            <TextField></TextField>
            <FormLabel>Enter Last Name</FormLabel>
            <TextField></TextField>
            <FormLabel>Enter Email</FormLabel>
            <TextField></TextField>
            <FormLabel>Description</FormLabel>
            <TextField></TextField>
            <Button onClick={handleSubmit}>Submit</Button>
        </FormControl>
    )
}

export default TicketForm