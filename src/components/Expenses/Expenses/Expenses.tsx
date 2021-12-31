import React, {useState} from "react"

import {Expense} from "../../../types"
import Card from "../../UI/Card/Card"
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter"
import ExpenseList from "../ExpenseList/ExpenseList"
import ExpensesChart from "../ExpensesChart/ExpensesChart"

import "./Expenses.css"

interface ExpensesProps {
  expenses: Expense[]
}
const Expenses: React.FC<ExpensesProps> = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState(2021)

  const filteredExpenses = expenses.filter((expense) => expense.date.getFullYear() === filteredYear)

  return (
    <Card className="expenses">
      <ExpensesFilter filteredYear={filteredYear} onFilteredYearSelect={setFilteredYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  )
}

export default Expenses
