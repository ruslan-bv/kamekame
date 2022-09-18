import * as React from 'react';
import { Box, Container, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import Header from '../components/Header';
import Deck from '../components/Deck';
import { UserContext, UserContextInterface } from '../context/context';
// interface DecksProps {
//     decks: any;
// }

const Decks:React.FC = () => {
    const { email } = React.useContext(UserContext) as UserContextInterface;
    const decks = [{name: 'animals'}, {name: 'prefectures'}, {name: 'cities'}];

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
        </div>
    )
}

export default Decks;
