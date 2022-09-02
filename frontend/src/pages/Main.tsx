import * as React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import KanjiGrid from '../components/KanjiGrid';

const Main:React.FC = () => {
    return (
        <div>
            {/* <Box> */}
                <Header />
                <KanjiGrid />
            {/* </Box> */}
        </div>
    )
}

export default Main;