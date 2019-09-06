import React, { Component } from 'react'

export class JobPreference extends Component {

    constructor(props) {
        super(props)
        

        this.state = {
             jobs:this.props.jobs,

        }
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleMax=this.handleMax.bind(this);
        this.handleMin=this.handleMin.bind(this);
    }


    handleUpdate(evt){
        evt.preventDefault();


    }
    handleChange(evt){

    }
    handleMax(evt){
        const key=evt.target.id;
        const arr = this.state.jobs;
        const name = evt.target.name;
    
        for(let i=0;i<arr.length;i++){
            if(arr[i].id===key){
                arr[i].Max=evt.target.value
            }
        }
        this.setState({
            jobs:arr
        })
    }

    handleMin(evt){

        const key=evt.target.id;
        const arr = this.state.jobs;
        const name = evt.target.name;
    
        for(let i=0;i<arr.length;i++){
            if(arr[i].id===key){
                arr[i].Min=evt.target.value
            }
        }
        this.setState({
            jobs:arr
        })

    }
  
    
    render() {
        const jobList = this.state.jobs.map(job=>{
            return (
            <div>
                <form value={job.id} name={job.id} >
                    <h1>{job.jobTitle}: {job.jobExperience}+ Experience</h1>
                    <br></br>
                        <h1>Pay information</h1>
                        <label>Min pay</label>
                        <input name="Min" id={job.id} onChange={this.handleMin}></input>
                        <label>max pay</label>
                        <input name="Max" id={job.id} onChange={this.handleMax}></input>
                    <button onClick={this.handleUpdate} value={job.id}>Save info</button>
                </form>
            </div>)

        });
        return (
            <div>
                <h1>job preference</h1>
                {jobList}
                <div>
                    <button onClick={this.props.nextStep}>Next</button>
                    <button onClick={this.props.prevStep}>Back</button>
                </div>
            </div>
        )
    }
}

export default JobPreference