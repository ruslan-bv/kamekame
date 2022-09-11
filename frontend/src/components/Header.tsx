import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, ButtonGroup, Toolbar, Typography, IconButton,
         Menu, MenuItem, Modal } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Login from '../pages/Login';

interface HeaderProps {
    isAccountOn?: boolean;
}

const Header:React.FC<HeaderProps> = ({ isAccountOn }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [modal, setModal] = React.useState(false);
    const handleOpenModal = () => setModal(true);
    const handleCloseModal = () => setModal(false);

    return (
        <AppBar position="static">
            <Toolbar sx = {{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton onClick={handleClick} color="inherit" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >   
                    <MenuItem component={Link} to={'/'}>Home</MenuItem>
                    <MenuItem component={Link} to={'/account'}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                <Typography variant="h4">
                    カメカメ：Your Kanji Wordbook
                </Typography>
                {
                 !isAccountOn ?
                 <ButtonGroup variant="contained">
                    <Button onClick={handleOpenModal}>Login</Button>
                    <Modal open={modal} onClose={handleCloseModal}>
                        <Login />
                    </Modal>
                    <Button href="/register">Register</Button>
                 </ButtonGroup> :
                 <Button variant="contained">Logout</Button>   
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header;
