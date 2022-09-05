import * as React from 'react';
import { AppBar, Box, Button, ButtonGroup, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
    isAccountOn?: boolean;
}

const Header:React.FC<HeaderProps> = ({ isAccountOn }) => {
    return (
        <AppBar position="static">
            <Toolbar sx = {{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton color="inherit" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h4">
                    カメカメ：Your Kanji Wordbook
                </Typography>
                {
                 !isAccountOn ?
                 <ButtonGroup variant="contained">
                    <Button>Login</Button>
                    <Button>Register</Button>
                 </ButtonGroup> :
                 <Button variant="contained">Logout</Button>   
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header;