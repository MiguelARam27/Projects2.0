import React,{Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/alert/Alerts';

import ContactState from './context/contact/ContactState';
import AuthState  from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import setAuthToken from './utils/setAuthToken';
if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App =()=> {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar/>
              <div className="container">
               <Alerts/>
                <Switch>
                  <Route exact path="/" component ={Home}/>
                  <Route exact path="/About" component ={About}/>
                  <Route exact path="/Register" component ={Register}/>
                  <Route exact path ="/Login" component={Login}/>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
