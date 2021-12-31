import React from "react"

import {Expense} from "../../../types"
import ExpenseItem from "../ExpenseItem/ExpenseItem"
import "./ExpenseList.css"

interface ExpenseListProps {
  filteredExpenses: Expense[]
}
const ExpenseList: React.FC<ExpenseListProps> = ({filteredExpenses}) => {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            amount={expense.amount}
            date={expense.date}
            title={expense.title}
          />
        )
      })}
    </ul>
  )
}

export default ExpenseList
