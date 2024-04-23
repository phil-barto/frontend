
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import Link from 'next/link';
import styles from "../app/page.module.css"


const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar className={styles.toolbar}>
                <Typography variant="h6" className={styles.title}>
                    My Website
                </Typography>
                <Link href="/">
                    <Button color="inherit">Home</Button>
                </Link>
                <Link href="/admin">
                    <Button color="inherit">Admin</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;