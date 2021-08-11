import React from 'react';
import './App.css';
import Button from './Components/Shared/Button/Button';

function App() {
  return (
    <div className="App  ">
      <Button text="shorten it" type="circular" />
      <Button text="shorten it" type="square" />
      <header className="App-header" />
    </div>
  );
}

export default App;
