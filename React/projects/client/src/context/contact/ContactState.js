import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER} from '../types';


const ContactState = props=>{
    const initialState={
        contacts:[
            {
            id:1,
            name:"Jill Johnson",
            email:"Jill@gmail.com",
            phone:"111-222-2345",
            type:'personal'
            },
            {
                id:2,
                name:"Harry Johnson",
                email:"Jill@gmail.com",
                phone:"111-222-2345",
                type:'personal'
            },
            {
                id:3,
                name:"Mark Johnson",
                email:"Jill@gmail.com",
                phone:"111-222-2345",
                type:'personal'
            }
        ],
        current:null,
        filtered:null
    };

    const [state,dispatch]= useReducer(contactReducer,initialState);

    //Add contact
    const addContact = contact =>{
        contact.id = uuid.v4();
        dispatch({type:ADD_CONTACT, payload:contact});
    }


    //Delete contact
    const deleteContact = id =>{
        dispatch({type:DELETE_CONTACT, payload:id});
    }

    //Set current contact
    const setCurrent = contact =>{
        dispatch({type:SET_CURRENT, payload:contact});
    }

    //clear contacts
    const clearCurrent =()=>{
        dispatch({type:CLEAR_CURRENT})
    }
    //update contact
    const updateContact= contact =>{
        dispatch({type:UPDATE_CONTACT, payload:contact});
    }


    //Filter contacts
    const filterContacts= text =>{
        dispatch({type:FILTER_CONTACTS,payload:text})
    }

    //clear contacts
    const clearFilter = ()=>{
        dispatch({ type:CLEAR_FILTER})
    }



    
    return(
        <ContactContext.Provider
        value={{
          contacts: state.contacts,
          current:state.current,
          filtered:state.filtered,
          setCurrent,
          clearCurrent,
          addContact,
          deleteContact,
          updateContact,
          
          filterContacts,
          clearFilter
        }}
      >
        {props.children}
      </ContactContext.Provider>
    )
};

export default ContactState;

