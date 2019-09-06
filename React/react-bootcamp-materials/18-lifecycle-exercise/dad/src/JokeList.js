import React, { Component } from 'react'
import axios from "axios"
import "./JokeList.css"
import Joke from './Joke'

class JokeList extends Component{

    static defaultProps={
        numJokesToGet:10
    };
    constructor(props) {
        super(props)
    
        this.state={
                 jokes:[]
             }
        }


    

   async componentDidMount(){

        let jokes=[];
        while(jokes.length<this.props.numJokesToGet){
            let res = await axios.get("https://icanhazdadjoke.com/",{
                headers:{Accept:"application/json"}
        });
        jokes.push({text:res.data.joke, votes:0});
       
    }
    console.log(jokes);
        
      this.setState({
          jokes:jokes
      })
    
}

handleVote(id,delta){


    
}
    render() {
        return (
            <div className="JokeList">
                <div className="SideBar">
                    <h1>Dad Jokes</h1>
                    <button className>New Jokes</button>
                </div>
                <div className="JokeList-Jokes">
                        {this.state.jokes.map(j=>(
                            <Joke votes={j.votes} text={j.text}/>
                        ))}
                </div>
            </div>
        )
    }
    
}


export default JokeList