import React, { Component } from 'react'

export class Second extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name :{...this.props.name},
            job :{...this.props.job},
            skill :{...this.props.skill}
       }
       this.handleChange=this.handleChange.bind(this);
    }

    handleChange(evt){
        // console.log(evt.target.name);
        // console.log(evt.target.value);

        // name = evt.target.name;
        // value = 
        this.props.handleChange(evt);
    }
    
    render() {
        return (
            <div>
                <label>Name</label>
                <input defaultValue={this.state.name.firstName} name="firstName" onChange={this.handleChange}></input>
                <input defaultValue={this.state.name.lastName}name="secondName"></input>
                <label>Job</label>
                <input defaultValue={this.state.job.jobExp}></input>
                <input defaultValue={this.state.job.jobTitle}></input>
                <label>Skill</label>
                <input type="radio" selected='true'></input>
            </div>
        )
    }
}

export default Second
