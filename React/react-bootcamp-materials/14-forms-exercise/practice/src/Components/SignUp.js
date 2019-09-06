import React, { Component } from 'react'

export class SignUp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            info:[this.props.info]
             
        }

        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(evt){
       this.props.handleChange(evt)
       
    }
    render() {

        const signUpForm = this.state.info.map(st=>{
            return(
                <form style={{border: "2px solid red"}}>
                <label>Restaurant name</label>
                <input  onChange={this.handleChange} name="restaurant"></input> 
                <br></br>
                <label>email</label>
                <input type="email"value={this.state.info.email}></input> 
                <br></br>
                {/* <label>first name</label>
                <input value={this.state.info.firstName}></input>  */}
                <br></br>
                <label>password</label>
                <input type="password"value={this.state.info.password}></input> 
                <label>Confirm password</label>
                <input type="password"value={this.state.info.password}></input> 
                <br></br>
                <label>street</label>
                <input value={this.state.info.street}></input> 
                <label>zip</label>
                <input value={this.state.info.zip}></input> 
                <label>state</label>
                <input value={this.state.info.state}></input> 
                <br></br>
                <button>confirm</button>

                {/* <label>Email</label>
                <input name="Min" id={job.id} onChange={this.handleMin}></input>
                <label>Restaurant</label>
                <input name="Min" id={job.id} onChange={this.handleMin}></input> */}
               </form>

            )
        })

        return (
            <div>
                <h1>Sign up!</h1>
                <br></br>
                 {signUpForm}
                <button onClick={this.props.prevStep}>Back</button>
                
            </div>
        )
    }
}

export default SignUp
