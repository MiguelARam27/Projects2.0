import React from 'react';
import logo from './logo.svg';
import './App.css';
import{Route, Switch} from "react-router-dom"
import Cat from './Cat'
import Dog from './Dog'

function App() {
  return (
    <div className="App">
    <Route path="/Dog" component={Dog}/>
    
    </div>
  );
}

export default App;

