import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectF from 'material-ui/SelectField'

export class FormPersonalDetails extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back=e=>{
        e.preventDefault();
        this.props.backStep();
    }

    render() {

        const values= this.props.values;

        return (
            <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Enter Personal Details"/>
                            <TextField
                            hintText="Enter your Occupation"
                            floatingLabelText="Occupation"
                            onChange={this.props.handleChange('occupation')}
                            defaultValue={values.occupation}
                            
                            />
                            <br/>
                            <TextField
                            hintText="Enter your City"
                            floatingLabelText="City"
                            onChange={this.props.handleChange('City')}
                            defaultValue={values.city}
                            
                            />
                            <br/>
                            <TextField
                            hintText="Enter your Bio"
                            floatingLabelText="bio"
                            onChange={this.props.handleChange('bio')}
                            defaultValue={values.bio}
                            />
                            <br/>
                            <RaisedButton
                            label="Continue"
                            primary={true}
                            onClick={this.continue}
                            />
                            <RaisedButton
                            label="Back"
                            primary={false}
                            onClick={this.back}
                            />
                    </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormPersonalDetails
