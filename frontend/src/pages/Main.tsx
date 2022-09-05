import * as React from 'react';
import Header from '../components/Header';
import KanjiGrid from '../components/KanjiGrid';

const Main:React.FC = () => {
    return (
        <div>
            <Header />
            <KanjiGrid />
        </div>
    )
}

export default Main;