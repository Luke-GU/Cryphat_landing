import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tokenomics from './components/sections/Tokenomics';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
