import React, { Component } from 'react'


class Joke extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <div className="Joke">
                <div className="Joke-buttons">
                    <button>UP</button>
                    <span>{this.props.votes}</span>
                    <button>DOWN</button>
                </div>
                <div>
                    The joke is:{this.props.text}
                </div>
            </div>
        )
    }
    
}

export default Joke