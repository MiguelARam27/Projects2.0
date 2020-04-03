import React, {useEffect, Fragment} from 'react';
import SearchBar from './component/layout/SearchBar'
import Logs from './component/logs/Logs'



import 'materialize-css/dist/css/materialize.min.css' ;
import M from 'materialize-css/dist/js/materialize.min.js';


const App =()=>{

  useEffect(()=>{
    //initializes materialize
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar/>
      <div className="container">
        <Logs/>
      </div>
    </Fragment>
  );
}

export default App;
