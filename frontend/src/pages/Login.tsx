import * as React from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import { signin } from '../services/authServices';

const Login:React.FC = () => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    
    const [login, setLogin] = React.useState({
        email: '',
        password: ''
    });

    const onChangeLogin = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setLogin((prevLogin) => {
            return {
                ...prevLogin, [name]: value
            }
        });
    }

    const handleLogin = () => {
        signin(login);
        setLogin({
            email: '',
            password: ''
        });
    }
    
    return (
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Kamekame Account
            </Typography>
            <Typography id="modal-modal-description" sx={{ 
                mt: 2, 
                display: 'flex',
                flexDirection: 'column'
            }}>
            <TextField 
                name="email" 
                onChange={onChangeLogin} 
                label="Your email" 
                variant="outlined"
            >{login.email}
            </TextField>
            <TextField 
                name="password" 
                onChange={onChangeLogin} 
                label="Your password" 
                type="password" 
                variant="outlined"
            >{login.password}
            </TextField>
            <Button onClick={handleLogin} color="info">Sign in</Button>
            </Typography>
      </Box>
    )
}

export default Login;
