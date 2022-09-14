import * as React from 'react';
import { Box, Container, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import Header from '../components/Header';
import Deck from '../components/Deck';

interface DecksProps {
    decks: any;
}

const Decks:React.FC<DecksProps> = ({ decks }) => {
    return (
        <div>
            <Header />
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                marginTop: '20px'
            }}>
                {decks.map((deck: any) => {
                    {deck.name}
                })}
            </Box>
        </div>
    )
}

export default Decks;
