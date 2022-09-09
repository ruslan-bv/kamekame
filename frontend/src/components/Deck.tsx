import * as React from 'react';
import { Box, Container, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import KanjiCard from './KanjiCard';

interface DeckProps {
    id: string;
    name: string;
    kanjiSet: string[];
    createdDate: Date;
}

const Deck:React.FC<DeckProps> = ({
    id, name, kanjiSet, createdDate
}): JSX.Element => {
    const dummyName = 'animals';
    const dummyDate = 'January 1, 2022'
    const dummyKanjiSet = ['1', '2', '3']
    return (
        <Box>
            <Typography variant="h3">{dummyName}</Typography>
            <Typography>created at {dummyDate}</Typography>
            <Container sx={{
                display: 'flex'
            }}>
                {dummyKanjiSet.map((kanji) => <KanjiCard content={kanji} />)}
            </Container>
            <Button>Delete</Button>
        </Box>
    )
}

export default Deck;
