import React, { useState } from 'react'
import classes from './App.module.css'
import AddTransaction from './components/AddTransaction/AddTransaction'
import Balance from './components/Balance/Balance'
import Header from './components/Header/Header'
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses'
import TransactionsList from './components/TransactionsList/TransactionsList'

function App() {
  return (
    <div>
      <Header />
      <div className={classes.container}>
      <Balance />
      <IncomeExpenses />
      <TransactionsList />
      <AddTransaction />
      </div>
    </div>
  )
}


export default App
