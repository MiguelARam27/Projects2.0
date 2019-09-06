import React, { Component } from 'react'
import uuid from 'uuid/v4'

export class JobSelect extends Component {
   
   constructor(props) {
       super(props)
   
       this.state = {
        jobTitle:'',
        jobExperience:''
       }
       this.Staticprops={
        joblist:this.props.listJobs,
        changed:false,
    }
       this.handleChange=this.handleChange.bind(this);
       this.continue=this.continue.bind(this);
       this.handleUpdate=this.handleUpdate.bind(this);
   }
   
    handleChange(evt){
            this.setState({
                [evt.target.name]:evt.target.value
            });
        }
    

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.createJob({...this.state,id:uuid()});
        this.setState({jobTitle:"",jobExperience:""});
        }

    render() {
        // const list= this.props.listJobs.map(st=>{

        // })

        const jobTitles = this.Staticprops.joblist.map(jobs=>{
            return <option name={jobs}>{jobs}</option>
        });

        const maxExperience = [];
        for (var i = 0; i <=this.props.maxExp; i++) {
            if(i===0){
                maxExperience.push(<option selected>{i}</option>)
            }else{
                maxExperience.push(<option>{i}</option>);
            }
            
        }
        return (
                <div>
                    <select name="jobTitle" onChange={this.handleChange}>
                        {jobTitles}
                    </select>
                     <select name="jobExperience"onChange={this.handleChange}>
                        {maxExperience}
                    </select>
                    <button onClick={this.handleUpdate}>Add Job!</button>
                </div>
        )
    }
}

export default JobSelect
