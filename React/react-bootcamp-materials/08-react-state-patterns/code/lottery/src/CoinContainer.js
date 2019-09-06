import React, { Component } from 'react'

import {choice} from './Helper'
import Coin from './Coin'


class CoinContainer extends Component{
    static defaultProps={
        coins:[
            {side: 'heads', url:"https://tinyurl.com/react-coin-heads-jpg"},
            {side: 'tails', url:"https://tinyurl.com/react-coin-tails-jpg"}
        ]
    }
    constructor(props){
        super(props);
        this.state ={
            currCoin:null,
            nFlips:0,
            nHeads:0,
            nTails:0  
        }
        this.handleClick=this.handleClick.bind(this);
    }
    
    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st=> {
            return{
                currCoin:newCoin,
                nFlips:st.nFlips+1,
                nHeads: st.nHeads + (newCoin.side==="heads"? 1:0),
                nTails: st.nTails + (newCoin.side==="tails"? 1:0)
            }
        //     if(newCoin.side==="heads"){
        //         newState.nHeads+=1;
        //     }else{
        //         newState.nTails+=1;
        //     }
        //     return newState;
        // })
    });
}

    handleClick(e){
        this.flipCoin();
    }
   
    render(){
        return(
            <div className="CoinContainer">
            <h2>Let's flip a coin!</h2>
            <button onClick ={this.handleClick}>Flip me</button>
            <p>
                out of {this.state.nFlips}, there have been {this.state.nHeads} heads and {this.state.nTails} tails.
            </p>
            {this.state.currCoin&&<Coin info={this.state.currCoin}></Coin>}
            {this.state.currCoin&& console.log(this.state.currCoin)}
            
            
            </div>
        )
    }
}


export default CoinContainer;