import * as React from 'react';
import Header from '../components/Header';
import KanjiGrid from '../components/KanjiGrid';
import { fetchStandardKanjiList } from '../services/kanjiServices';

const Main:React.FC = () => {
    React.useEffect(() => {
        fetchStandardKanjiList();
    }, [])

    return (
        <div>
            <Header />
            <KanjiGrid />
        </div>
    )
}

export default Main;