import React from 'react';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpenses} from './components/IncomeExpenses'
import {TransactionList} from './components/TransactionList'
import {AddTransaction} from './components/AddTransaction'

import './App.css' 

function App() {
  return (
    <div className="App">
      <Header></Header>
     <div className="container">
       <Balance/>
       <IncomeExpenses/>
       <TransactionList/>
     </div>
      <AddTransaction/>
      
    
    </div>
  );
}

export default App;
