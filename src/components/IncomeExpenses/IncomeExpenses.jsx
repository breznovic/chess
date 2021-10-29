import React from 'react'
import classes from './IncomeExpenses.module.css'

const IncomeExpenses = () => {
    return (
        <div>
            <div className={classes.incExpContainer}>
                <div>
                    <h4>Income</h4>
                    <p id="money-plus" className={classes.moneyPlus}>+$0.00</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id="money-minus" className={classes.moneyMinus}>-$0.00</p>
                </div>
            </div>
        </div>
    )
}

export default IncomeExpenses
