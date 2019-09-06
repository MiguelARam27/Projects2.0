import React, { useEffect,Fragment } from 'react'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'
import Repos from '../Repos'

const User =(props)=> {
useEffect(()=>{
    props.getUser(props.match.params.login);
    props.getUserRepos(props.match.params.login)
},[]);


        const{
            name,
            avatar_url,
            location,
            company,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        }=props.user;
        const{loading, repos}=props;

        if(loading){

           return( <Spinner/>)
        }else{
            return (
               <Fragment>
                   <Link to="/" className="btn btn-light">
                   Back to search
                   </Link>
                   Hirable:{''}
                   {hireable? <i className="fas fa-check text-sucess"/> :<i className="fas fa-times"/>}
                   <div className="card grid-2">
                    <div className="all-center">
                        <img 
                        src={avatar_url}
                        className="round-img"
                        alt=""
                        style={{width:"150px"}}></img>
                        <h1>{name}</h1>
                        <p>Location:{location}</p>
                    </div>
                    <div>
                        {bio &&(
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                        )}
                        <a href={html_url} className='btn btn-dark my-1'>
                        Visit my github profile
                        </a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Username:</strong>{login}
                                </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>company:</strong>{company}
                                </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>Website:</strong>{blog}
                                </Fragment>}
                            </li>
                        </ul>
                    </div>
                   </div>
                   <div className='card text-center'>
                        <div className="badge badge-primary">followers:{followers}</div> 
                        <div className="badge badge-sucess">followers:{following}</div>  
                        <div className="badge badge-danger">followers:{public_repos}</div>  
                        <div className="badge badge-dark">followers:{public_gists}</div>     
                   </div>
                   <Repos repos={repos}/>
               </Fragment>
            )
        }
       
}

export default User
