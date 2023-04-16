import './App.css';
import React from 'react';
import RandomizeNumber from '../RandomizeNumber/RandomizeNumber';
import Header from '../Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <RandomizeNumber />
    </div>
  );
}

export default App;
