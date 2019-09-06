import React, { Component } from 'react'

export class Search extends Component {

    state ={
        text:''
    };

    onChange=(e)=>{
        this.setState({
            text:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(this.state.text===''){
            this.props.setAlert('please enter something', 'light')
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({text:''})
        }
    }
    handleClear=()=>{
        this.props.clearUsers();
    }
    render() {
        return (
            <div> 
                <form onSubmit={this.onSubmit}className="form">
                    <input type="text" 
                    name = "text" 
                    placeholder="Search Users...."
                    value={this.state.text}
                    onChange={this.onChange}/>
                    <input
                    type="submit"
                    value="search"
                    className="btn btn-dark btn-block"
                    />
                </form>
                {!this.props.showClear?'':<button className="btn btn-light btn block" onClick={this.handleClear}>Clear Users</button>}
            </div>
        )
    }
}

export default Search
