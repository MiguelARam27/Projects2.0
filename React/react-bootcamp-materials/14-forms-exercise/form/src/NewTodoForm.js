import React, { Component } from 'react'
import uuid from 'uuid/v4'

class NewTodoForm extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
             task:""
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);

    }

    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.createTodo({...this.state, id:uuid()});
        this.setState({task:""});
        }
    
    render() {
        return (
            <form onSubmit={this.handleUpdate}>
                <label htmlFor="task">New Job</label>
                <input 
                type ="text"
                 placeholder="New Job" 
                 id="task"
                 value={this.state.task}
                 onChange={this.handleChange}
                 name="task"/>
                 <button>Add Job</button>
            </form>
        )
    }
}

export default NewTodoForm