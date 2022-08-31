import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Account from './pages/Account';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Kamekame!</h1>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
