import React from 'react'
import { Box, Button, ButtonGroup, Toolbar, Typography, IconButton, TextField } from '@mui/material';
import Header from '../components/Header';


const Account:React.FC = () => {
    const isAccountOn = true;

    return (
        <div>
            <Header isAccountOn={isAccountOn} />
            <Box sx={{
                mt: 10,
                ml: 20,
                mr: 20,
                mb: 10,
                padding: 2,
                backgroundColor: 'primary.main',
                // width: 200,
                height: 400,
            }}>
                <Typography color="white" variant="h4">Account Control</Typography>
                <Box component="form" sx={{ 
                           display: 'flex',
                           flexDirection: 'column',
                           justifyContent: 'center',
                           alignItems: 'center',
                           padding: 2, 
                           backgroundColor: 'primary.light' 
                        }}>
                    <TextField label="Your name" variant="outlined"></TextField>
                    <TextField label="Your email" variant="outlined"></TextField>
                    <TextField label="Your password" variant="outlined"></TextField>
                    <TextField label="Number of decks" variant="outlined"></TextField>
                </Box>
                <ButtonGroup sx={{
                    mt: 5
                }} variant="contained">
                    <Button color="info">Save</Button>
                    <Button color="warning">Delete Account</Button>
                </ButtonGroup>
            </Box>
        </div>
    )
}

export default Account;