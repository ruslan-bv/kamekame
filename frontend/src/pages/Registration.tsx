import * as React from 'react'
import { Box, Button, ButtonGroup, Toolbar, Typography, IconButton, TextField } from '@mui/material';
import Header from '../components/Header';
import { signup } from '../services/authServices';

const Registration:React.FC = () => {
    const [registration, setRegistration] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const onChangeRegistration = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegistration((prevRegistration) => {
            return {...prevRegistration, [name]: value}
        });
    }

    const handleRegistration = () => {
        signup(registration);
        setRegistration({
            name: '',
            email: '',
            password: ''
        });
    }
    
    return (
        <div>
            <Header />
            <Box sx = {{
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
                           backgroundColor: 'primary.light',
                           marginBottom: 2,
                        }}>
                    <TextField 
                        name="name" 
                        onChange={onChangeRegistration} 
                        label="Your name" 
                        variant="outlined"
                    >{registration.name}
                    </TextField>
                    <TextField 
                        name="email" 
                        onChange={onChangeRegistration} 
                        label="Your email" 
                        variant="outlined"
                    >{registration.email}
                    </TextField>
                    <TextField 
                        name="password" 
                        onChange={onChangeRegistration} 
                        label="Your password" 
                        type="password" 
                        variant="outlined"
                    >{registration.password}
                    </TextField>
                </Box>
                <Button onClick={handleRegistration} variant="contained" color="info">Register</Button>
            </Box>
        </div>
    )
}

export default Registration;
