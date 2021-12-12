import React from "react"

import ExpenseDate from "../ExpenseDate/ExpenseDate"
import "./ExpenseItem.css"
import Card from "../Card/Card"

interface ExpenseItemProps {
  date: Date
  expense: string
  expenseAmount: number
}

const ExpenseItem = ({date, expense, expenseAmount}: ExpenseItemProps) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{expense}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
