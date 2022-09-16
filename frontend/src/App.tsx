import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Account from './pages/Account';
import Registration from './pages/Registration';
import Decks from './pages/Decks';
import './App.css';

const App:React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<Account />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/decks" element={<Decks />} />
      </Routes>
    </div>
  );
}

export default App;
