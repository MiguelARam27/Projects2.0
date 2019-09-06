import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectF from 'material-ui/SelectField'

export class FormUserDetails extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render() {

        const values= this.props.values;

        return (
            <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Enter User Details"/>
                            <TextField
                            hintText="Enter your first Name"
                            floatingLabelText="First Name"
                            onChange={this.props.handleChange('firstName')}
                            defaultValue={values.firstName}
                            
                            />
                            <br/>
                            <TextField
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            onChange={this.props.handleChange('lastName')}
                            defaultValue={values.lastName}
                            
                            />
                            <br/>
                            <TextField
                            hintText="Enter your Email"
                            floatingLabelText="Email"
                            onChange={this.props.handleChange('email')}
                            defaultValue={values.email}
                            />
                            <br/>
                            <RaisedButton
                            label="Continue"
                            primary={true}
                            onClick={this.continue}
                            />
                    </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
