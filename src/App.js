import React from 'react';
import './App.css';
import Button from './Components/Shared/Button/Button';
import CircularIcon from './Components/Shared/Icons/CircularIcon/CircularIcon';

function App() {
  return (
    <div className="App  ">
      <Button text="shorten it" type="circular" />
      <Button text="shorten it" type="square" />
      <CircularIcon>hi</CircularIcon>
      <header className="App-header" />
    </div>
  );
}

export default App;
