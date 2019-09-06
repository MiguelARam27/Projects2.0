import React, {Fragment ,Component} from 'react';
import NavBar from './components/layout/NavBar'
import axios from 'axios'
import Users from './components/Users/Users'
import User from './components/Users/User'
import Search from './components/Users/Search'
import Alert from './components/layout/Alert'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/Pages/About'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      users:[],
      user:{},
      loading:false,
      alert:null,
      repos:[]
       
    }
  }

  // async componentDidMount(){
  //   this.setState({
  //     loading:true
  //   })
    
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({
  //     users: res.data,
  //     loading:false
  //   })
  // }

  searchUsers= async(text)=>{

    this.setState({
      loading:true
    })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      users:res.data.items, loading:false
    })
  }

  //Get a single github user
  getUser = async(username)=>{
    this.setState({
      loading:true
    })
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      user:res.data, loading:false
    })
  }

  //Get user repo
  getRepos = async(username)=>{
    this.setState({
      loading:true
    })
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&&sort=created:asc&&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      repos:res.data, loading:false
    })
  }

  //Clear users from stat
  clearUsers=()=>{
    this.setState({users:[],loading:false});
  }

  //Set Alert
  setAlert =(msg,type)=>{

    this.setState({alert:{msg:msg,type:type}});
    setTimeout(()=>this.setState({alert:null}),5000)
  }

  
  
  render(){
    return (
      <Router>
        <Fragment>
          <NavBar title="GitHub Finder"
          icon="fab fa-github"
          />


        <div className="container">
          <Alert alert={this.state.alert}/>
          <Switch>
            <Route
            exact 
            path='/' render={props =>(
              <Fragment>
                <Search searchUsers={this.searchUsers}
                clearUsers={this.clearUsers}
                showClear={this.state.users.length > 0 ? true:false}
                setAlert={this.setAlert}
                />
                  <Users
              loading={this.state.loading}
              users={this.state.users}/>
              </Fragment>

            )}/>
            <Route exact path='/about' component={About}/>
            <Route exact 
            path='/user/:login' 
            render ={props=>(
              <User 
              {...props} 
              getUser={this.getUser} 
              getUserRepos={this.getRepos} 
              user={this.state.user} 
              loading={this.state.loading}
              repos={this.state.repos}/> 
            )}></Route>
          </Switch>
        </div>
        
        </Fragment>
      </Router>
    );
  }
}

export default App;
