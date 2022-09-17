import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Account from './pages/Account';
import Registration from './pages/Registration';
import Decks from './pages/Decks';
import UserContextProvider from './context/context';
import './App.css';

const App:React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <UserContextProvider>
          <Route path="/" element={<Main />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/decks" element={<Decks />} />
        </UserContextProvider>
      </Routes>
    </div>
  );
}

export default App;
