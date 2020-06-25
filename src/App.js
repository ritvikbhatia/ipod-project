import React from 'react';
import Screen from './components/screen'
import Keypad from './components/keypad'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="ipod">
        <Screen></Screen>
        <Keypad></Keypad>        
      </div>
    </div>
  );
}

export default App;
