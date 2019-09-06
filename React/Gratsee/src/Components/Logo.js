import React, { Component } from 'react';


import './Logo.css'

class Logo extends Component{


    render(){
        return(
            <div className="Top_container">
                <div className="Logo_container">
                    <div className="Logo_pic"></div>
                    <span>Gratsee</span>
                </div>
                <div className="Message">
                    <h1>What jobs are you looking to fill?</h1>
                </div>
            </div>
        )
    }


}

export default Logo;