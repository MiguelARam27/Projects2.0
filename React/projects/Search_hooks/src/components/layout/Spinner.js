import React from 'react'
import Spin from './spinner.gif'

const Spinner = () =>{
    return(
        <div>
            <img src={Spin} alt = 'loading...' style={{width:'200px', margin:'auto', display:'block'}}/>
        </div>
    )
}

export default Spinner
