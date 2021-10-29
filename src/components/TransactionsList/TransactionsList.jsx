import React from 'react'
import classes from './TransactionsList.module.css'

const TransactionsList = () => {
    return (
        <div>
            <h3>History</h3>
            <ul className={classes.list}>
                <li className={classes.minus}>
                    Cash <span>-$400</span><button className={classes.deleteBtn}>x</button>
                </li>
            </ul>
        </div>
    )
}

export default TransactionsList
