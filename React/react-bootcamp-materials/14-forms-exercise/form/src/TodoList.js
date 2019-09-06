import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'


class TodoList extends Component{
   
    constructor(props){
        super(props);
        this.state={
            todos:[
                {
                    id:0,
                    task:'server'
                },
                {
                    id:1,
                    task:'cook '
                }
            ],

            jobs:[
                {
                    id:2,task:'dishwasher'
                },
                {
                    id:3,task:'dish'
                },
                {
                    id:2,task:'diser'
                }
            ]
        };
        this.create=this.create.bind(this);
        this.remove=this.remove.bind(this);
        this.update=this.update.bind(this);
    }
    create(newTodo){
        this.setState({
            todos:[...this.state.todos,newTodo]
        })
    }
   remove(id){
       this.setState({
           todos:this.state.todos.filter(t=>t.id!==id)
       })
   }
   update(id, updatedTask){
       const updatedTodos=this.state.todos.map(todo=>{
           if(todo.id===id){
               return{...todo, task:updatedTask};
           }
           return todo;
       });
       this.setState({todos:updatedTodos});
   }
    render() {
        const todos = this.state.todos.map(todo=>{
            return <Todo key={todo.id} 
            id={todo.id}
            task={todo.task} 
            removeTodo={this.remove}
            updateTodo={this.update}/>
        });

        const Jobs=this.state.jobs.map(jobs=>{
            return <option
            key={jobs.id}
            value={jobs.task}
            >
            {jobs.task}
            </option>
        })

        return (
            <div>
                <h1>Job List</h1>
                <NewTodoForm createTodo={this.create}/>
                
                <ul>
                    {todos}
                </ul>
                <select>
                    {Jobs}
                </select>

                
            </div>
        )
    }
}

export default TodoList