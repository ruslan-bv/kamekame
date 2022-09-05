import React from 'react'
import { Box, Button, Toolbar, Typography, IconButton, TextField } from '@mui/material';
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
                <Typography color="white" variant="h4">Your Account</Typography>
                <Box component="form" sx={{ 
                           display: 'flex',
                           justifyContent: 'space-around',
                           padding: 2, 
                           backgroundColor: 'primary.light' 
                        }}>
                    <TextField label="Your name" variant="outlined"></TextField>
                    <TextField label="Your email" variant="outlined"></TextField>
                </Box>
            </Box>
        </div>
    )
}

export default Account;