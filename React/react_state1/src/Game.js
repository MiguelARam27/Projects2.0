import React,{ Component } from 'react'


class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            score:0,
            gameOver:false
        }
    }
    render(){
        return(
            <div>
                <h1>Your Score is:{this.state.score}</h1>
                <h2>did this work?</h2>
            </div>
        )
    }
}

export default Game