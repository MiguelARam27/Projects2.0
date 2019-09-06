import React, { Component } from 'react';


import './Modal.css'

class Modal extends Component{

    


    render(){
        return(
            <div className="Modal_container">
                <form className="form">
                    <div className="option_wrapper">
                        <div className="option">
                            <input required='yes'placeholder="server"></input>
                            <button>X</button>
                        </div>
                        <div className="option">
                            <input required="yes" placeholder="Cook"></input>
                            <button>X</button>
                        </div>
                        <div className="add">
                            <button id="addButton">+</button>
                        </div> 
                    </div>
                    <div className="submit">
                        <input type="submit"></input>
                    </div>
                </form>
            </div>

        )
    }


}

export default Modal;