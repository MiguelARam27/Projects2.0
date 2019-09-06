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
            task:evt.target.value
        })
    }
    // handleClick(evt){
    //     if(this.state.task===""){
    //         this.props.createTodo({...this.state, id:uuid()});
    //     }
    // }

    handleUpdate(evt){
        evt.preventDefault();
        //If the task list is empty then submit the firs option
        // console.log(this.props.jobs[0].task);
        console.log(this.state.task==="");
        if(this.state.task===""){
            console.log("Check1");
            this.setState({
                task:this.props.jobs[0].task,

            });
            // this.props.createTodo({...this.state, id:uuid()});
        }
        this.props.createTodo({...this.state, id:uuid()});
        this.setState({task:""});
        }
    
    render() {
           const Jobs=this.props.jobs.map(jobs=>{
            return <option
            key={jobs.id}
            value={jobs.task}
            >
            {jobs.task}
            </option>
        })
        return (
            <form onSubmit={this.handleUpdate}>
                {/* <label htmlFor="task">New Job</label> */}
                <select onChange={this.handleChange}>
                    {Jobs}
                </select> 
                <button >Add Job</button>
            </form>
        )
    }
}

// {/* <form onSubmit={this.handleUpdate}>
// <label htmlFor="task">New Job</label>
// <input 
// type ="text"
//  placeholder="New Job" 
//  id="task"
//  value={this.state.task}
//  onChange={this.handleChange}
//  name="task"/>
//  <button>Add Job</button>
// </form> */}

export default NewTodoForm