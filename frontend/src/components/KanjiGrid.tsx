import * as React from 'react';
import { Box } from '@mui/material';
import KanjiCard from './KanjiCard';

const dummies = [1, 2, 3, 4, 5, 6, 7, 8 , 9];

const KanjiGrid: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                marginTop: '20px'
            }}
        >
            {dummies.map((el) => <KanjiCard content={el.toString()} />)}
        </Box>
    )
}

export default KanjiGrid;
