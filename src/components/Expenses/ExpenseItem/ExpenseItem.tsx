import React from "react"

import ExpenseDate from "../ExpenseDate/ExpenseDate"
import "./ExpenseItem.css"
import Card from "../../UI/Card/Card"
import {Expense} from "../../../types"

const ExpenseItem: React.FC<Expense> = ({date, amount, title}) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">&#36;{amount}</div>
        </div>
      </Card>
    </li>
  )
}

export default ExpenseItem
