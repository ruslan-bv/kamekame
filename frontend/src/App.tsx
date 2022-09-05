import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Account from './pages/Account';
import './App.css';

const App:React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
