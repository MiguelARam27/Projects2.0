import React, { Component } from 'react'


class Todo extends Component{

    constructor(props){
        super(props);
        this.state={
            isEditing:false,
            task:this.props.task 
        }
        this.handlRemove=this.handlRemove.bind(this);
        this.toggleForm=this.toggleForm.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handlRemove(){
        this.props.removeTodo(this.props.id)
    }
    toggleForm(){
        this.setState({
            isEditing: !this.state.isEditing
        });
    }
    handleUpdate(evt){
        evt.preventDefault();
        
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({isEditing: false});
    }   


    handleChange(evt){
        
        this.setState(
            {
            task:evt.target.value
        });
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

export default Todo;