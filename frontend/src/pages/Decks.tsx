import * as React from 'react';
import { Box, Container, Card, CardContent, CardActions, Button, TextField, Typography, Modal } from '@mui/material';
import Header from '../components/Header';
import Deck from '../components/Deck';
import { UserContext, UserContextInterface } from '../context/context';
// interface DecksProps {
//     decks: any;
// }

const Decks:React.FC = () => {
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

    const { email } = React.useContext(UserContext) as UserContextInterface;
    const decks = [{name: 'animals'}, {name: 'prefectures'}, {name: 'cities'}];

    const [newDeck, setNewDeck] = React.useState('');
    const onChangeNewDeck = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { value } = e.target;
        setNewDeck(value);
    }

    const [modal, setModal] = React.useState(false);
    const handleOpenModal = () => setModal(true); 
    const handleCloseModal = () => setModal(false);

    const deckCreation = (
        <Box sx={style}>
            <Typography variant="h6">Start a new deck</Typography>
            <TextField
                name="deck"
                onChange={onChangeNewDeck}
                label="Deck name"
                variant="outlined"
            >
                {newDeck}
            </TextField>
            <Button>Save</Button>
        </Box>
    )

    return (
        <div>
            <Header />
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                marginTop: '20px'
            }}>
                {decks.map((deck) => {
                    return <span>{deck.name}</span>
                })}
            </Box>
            <Button onClick={handleOpenModal}>Start a new deck</Button>
            <Modal open={modal} onClose={handleCloseModal}>
                {deckCreation}
            </Modal>
        </div>
    )
}

export default Decks;
