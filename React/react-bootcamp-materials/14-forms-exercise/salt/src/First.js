import React, { Component } from 'react'
import Second from './Second'

export class First extends Component {

    constructor(props) {
        super(props)
    this.state={
        name:{
            firstName:"Miguel",
            lastName:"Ramirez"
          },
          job:{
            JobExp:"2",
            JobTitle:"BarTender"
          },
          skill:{
            talking:false,
            speaking:false
          }
        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(evt){
        console.log(evt.target.name);
        let target = evt.target.name;
        let name;
        name[target]=evt.target.value;
        console.log(name);
        this.setState(prevState=>({
            name:{
                ...prevState.name,
                name
            }
        }));
        console.log(this.state.name);
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name.firstName}:{this.state.name.lastName}</h1>
                <br></br>
                <h1>{this.state.job.JobTitle}:{this.state.job.JobExp}</h1>
                <br></br>
                <h1>{this.state.skill.talking?"no talking skill":"yes talking"}</h1>
                <h1>{this.state.skill.speaking?"no speaking skill":"yes talking"}</h1>

                <Second
                name={this.state.name}
                job={this.state.job}
                skill={this.state.skill}
                handleChange={this.handleChange}
                />
            </div>
        )
    }
}

export default First
