import React, { useState } from 'react'
import classes from './AddTransaction.module.css'

const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    return (
        <div>
            <h3>Add new transaction</h3>
      <form>
        <div className={classes.formControl}>
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className={classes.formControl}>
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className={classes.btn}>Add transaction</button>
      </form>
        </div>
    )
}

export default AddTransaction
