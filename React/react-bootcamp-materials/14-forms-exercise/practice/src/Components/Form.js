import React, { Component } from 'react'

import JobSelect from './JobSelect'
import JobPreference from './JobPreference'
import JobSelectList from './JobSelectList'
import SignUp from "./SignUp"

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             job:[
                //  {
                //      jobExperience:"2",
                //       jobTitle:"YEs"  
                //  }
             ],
             jobs:[
                "Server",
                "Cook",
                "Washer"
             ],
            maxExp:5,
            step:3,
            restaurant:"Mcdonlad's",
            email:"",
            password:"",
            street:"",
            zip:"",
            state:"",
            city:""

        }
        this.nextStep=this.nextStep.bind(this);
        this.prevStep=this.prevStep.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.createJob=this.createJob.bind(this);
        this.remove=this.remove.bind(this);
        this.addInfo=this.addInfo.bind(this);
        this.confirmInfo=this.confirmInfo.bind(this);
    }
    nextStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step+1
        });
    }

    prevStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step - 1
        });
    }

    handleChange(e){
        console.log("trig1");
        this.setState({
            [e.target.name]:e.target.value
        });
        console.log(e.target.name+":"+e.target.value)
    }
    createJob(newJob){
        this.setState({
            job:[...this.state.job,newJob]
        });
    }

    remove(id){
        this.setState({
            job:this.state.job.filter(t=>t.id!==id)
        })
    }

    addInfo(id,info){
        let arr = this.state.job;
         arr.find((o,i)=>{
            if(o.id===id){
                arr[i].push(info);
                return true
            }
        });
        console.log(arr);
    }

    confirmInfo(){

    }


    

   
    render() {
        const step= this.state.step;
        const jobsList=this.state.jobs;
        const jobs=this.state.job;
        const { restaurant,email,password,city,street,zip,state}=this.state;
        const values ={ restaurant,email, password, street,zip,state,city};
        switch(step){
            case 1:
            return(
            <div>
                <h1>
                    Job select Form!! 
                </h1>
                <JobSelect
                    listJobs={jobsList}
                   
                    maxExp={this.state.maxExp}
                    createJob={this.createJob}
                />
                <div>
                    <JobSelectList
                    jobSelected={this.state.job}
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    remove={this.remove}
                    />
                </div>
                <div>
                    <button onClick={this.nextStep}>Next</button>
                    
                </div>
            </div>
            )
            case 2:
            return(
                <JobPreference
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                jobs={jobs}
                addInfo={this.addInfo}/>
                
            );
            case 3:
            return(
                <SignUp
                prevStep={this.prevStep}
                confirm={this.confirmInfo}
                info={values}
                handleChange={this.handleChange}/>
               
            )
        }
    }
}

export default Form
