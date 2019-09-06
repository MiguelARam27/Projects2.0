import React from 'react';
import Game from './Game';
import logo from './logo.svg';
import Rando from './Rando';
import Button from './Button'
import './App.css';
import BrokenClick from './BrokenClick';


function App() {
  return (
    <div className="App">
     <Rando maxNum={3}/>
     <Button/>
     <br/>
     
     <BrokenClick/>
    </div>
  );
}

export default App;
