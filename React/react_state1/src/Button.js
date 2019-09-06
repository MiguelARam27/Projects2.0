import React, { Component } from 'react';

class Button extends Component {
    constructor(props){
        super(props);
        this.state ={
            clicked:false
        }
    }
    render(){
        return (

            <div>
                <h1>{this.state.clicked? 'clikked!!!!' :'Not clicked'}</h1>
            <button onClick={function(){
                alert('click!!!');
            }}>click me!</button>
            </div>
        )
    }
}

export default Button