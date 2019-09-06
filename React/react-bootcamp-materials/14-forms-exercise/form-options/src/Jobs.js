import React, { Component } from 'react'


class Jobs extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             isEditing:false,
             task:this.props.task
        }
    }
    
    render() {
        let result;
        if(this.state.isEditing){
            result =(
                <div>
                    <form >
                        <input type="text"
                        value={this.state.task}
                        name="task"
                        onChange={this.handleChange}
                        ></input>
                        <button onClick={this.handleUpdate} >Save</button>
                    </form>
                </div>
            )
        } else{
            result=(
            <div>
                <button onClick={this.toggleForm}>Edit</button>
                <button onClick={this.handlRemove}>X</button>
                <li>{this.props.task}</li>
            </div>
            )

        }
        return result
    }
}

export default Jobs