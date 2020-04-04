import React, {useEffect, Fragment} from 'react';
import {Provider} from 'react-redux';
import store from './store';

import SearchBar from './component/layout/SearchBar'
import Logs from './component/logs/Logs'
import AddButton from './component/layout/AddButton'

import AddLogModal from './component/logs/AddLogModal'
import EditLogModal from './component/logs/EditLogModal'

import AddTechModal from './component/techs/AddTechModal'
import TechsListModal from './component/techs/TechsListModal'

import 'materialize-css/dist/css/materialize.min.css' ;
import M from 'materialize-css/dist/js/materialize.min.js';


const App =()=>{

  useEffect(()=>{
    //initializes materialize
    M.AutoInit();
  });
  return (
    <Provider store = {store}>
      <Fragment>
        <SearchBar/>
        <div className="container">
          <AddButton/>
          <AddTechModal/>
          <EditLogModal/>
          <AddLogModal/>
          <TechsListModal/>
          <Logs/>
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
