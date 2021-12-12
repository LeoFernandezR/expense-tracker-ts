import React from "react"

import Card from "../Card/Card"
import ExpenseItem from "../ExpenseItem/ExpenseItem"
import "./Expenses.css"

interface Expense {
  id: string
  title: string
  date: Date
  amount: number
}

interface ExpensesProps {
  expenses: Expense[]
}
const Expenses: React.FC<ExpensesProps> = ({expenses}) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            expense={expense.title}
            expenseAmount={expense.amount}
          />
        )
      })}
    </Card>
  )
}

export default Expenses
