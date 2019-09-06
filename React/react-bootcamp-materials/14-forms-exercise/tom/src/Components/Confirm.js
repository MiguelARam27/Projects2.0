import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectF from 'material-ui/SelectField'
import {List, ListItem} from 'material-ui/List'

export class Confirm extends Component {

    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back =e =>{
        e.preventDefault();
        this.props.backStep();
    }
    render() {
        const {values:{firstName, lastName, email, occupation, city, bio}}=this.props

        return (
            <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Confirm user Data"/>
                        <List>
                            <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                            />
                            <ListItem
                            primaryText="last Name"
                            secondaryText={lastName}
                            />
                            <ListItem
                            primaryText="email"
                            secondaryText={email}
                            />
                            <ListItem
                            primaryText="occupation"
                            secondaryText={occupation}
                            />
                            <ListItem
                            primaryText="city"
                            secondaryText={city}
                            />
                             <ListItem
                            primaryText="bio"
                            secondaryText={bio}
                            />
                        </List>
                            <br/>
                            <RaisedButton
                            label="Confirm!"
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

export default Confirm
