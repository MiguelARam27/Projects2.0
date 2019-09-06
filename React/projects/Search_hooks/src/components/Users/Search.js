import React, { useState } from 'react'

const Search =(props)=> {
    const [text,setText]=useState('');

   const onChange=(e)=>{
        setText(e.target.value)
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        if(text===''){
            props.setAlert('please enter something', 'light')
        }else{
            props.searchUsers(text);
           setText('');
        }
    }
    const handleClear=()=>{
        props.clearUsers();
    }
        return (
            <div> 
                <form onSubmit={onSubmit}className="form">
                    <input type="text" 
                    name = "text" 
                    placeholder="Search Users...."
                    value={text}
                    onChange={onChange}/>
                    <input
                    type="submit"
                    value="search"
                    className="btn btn-dark btn-block"
                    />
                </form>
                {!props.showClear?'':<button className="btn btn-light btn block" onClick={handleClear}>Clear Users</button>}
            </div>
        )
}

export default Search
