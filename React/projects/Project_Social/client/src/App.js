import React, { Fragment } from 'react';
import NavBar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <NavBar />
      <Route exact path="/" component={Landing} />
    </Fragment>
  </Router>
);



export default App;;
