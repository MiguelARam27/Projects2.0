import React, { Component } from 'react'

export class JobSelectList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            jobList:this.props.jobSelected
        }
        this.handleRemove=this.handleRemove.bind(this);
    }

    componentDidUpdate(prevProps){
       
       if(!(prevProps.jobSelected===this.props.jobSelected)){{
           this.setState({
               jobList:this.props.jobSelected
           })
       }}
       
    }

    handleRemove(evt){
        this.props.remove(evt.target.value);
    }
    render() {
       
        const jobList = this.state.jobList.map(job=>{
            return (
            <div>
                <span>{job.jobTitle}:{job.jobExperience}</span>
                {/* <button>Edit</button> */}
                <button onClick={this.handleRemove} value={job.id}>Delete</button>
            </div>)

        });

        return (
            <div>
                <h1>Job List</h1>
                <ul>
                    <li>{jobList}</li>
                </ul>
            </div>
        )
    }
}

export default JobSelectList
