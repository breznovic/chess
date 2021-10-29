import React from 'react'
import classes from './AddTransaction.module.css'

const AddTransaction = () => {
    return (
        <div>
            <h3>Add new transaction</h3>
      <form id="form">
        <div className={classes.formControl}>
          <label for="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." />
        </div>
        <div className={classes.formControl}>
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button className={classes.btn}>Add transaction</button>
      </form>
        </div>
    )
}

export default AddTransaction
