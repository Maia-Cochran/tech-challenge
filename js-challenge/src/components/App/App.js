import './App.css';
// import React, { useState, useEffect } from 'react';
import RandomizeNumber from '../RandomizeNumber/RandomizeNumber';
// import LossMessage from '../LossMessage/LossMessage';
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
