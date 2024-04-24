import TextField from '@mui/material/TextField';

import styles from "../app/page.module.css"
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';

const TicketForm = () => {

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
            <Button>Submit</Button>
        </FormControl>
    )
}

export default TicketForm