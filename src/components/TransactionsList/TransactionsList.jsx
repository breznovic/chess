import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import Transaction from '../Transaction/Transaction'
import classes from './TransactionsList.module.css'

const TransactionsList = () => {

    const {transactions} = useContext(GlobalContext)

    return (
        <div>
            <h3>History</h3>
            <ul className={classes.list}>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </div>
    )
}

export default TransactionsList
