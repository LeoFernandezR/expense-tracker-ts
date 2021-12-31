import React, {useState} from "react"

import {Expense} from "../../../types"
import ExpenseForm from "../ExpenseForm/ExpenseForm"

import "./NewExpense.css"

interface NewExpenseProps {
  onAddExpense: (newExpense: Expense) => void
}

const NewExpense: React.FC<NewExpenseProps> = ({onAddExpense}) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false)

  const saveExpenseDataHandler = (formExpenseData: Expense): void => {
    const expenseData = {
      ...formExpenseData,
      id: Math.random().toString(),
    }

    onAddExpense(expenseData)
    setShowExpenseForm(false)
  }

  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm
          setShowExpenseForm={setShowExpenseForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={() => setShowExpenseForm(true)}>Add new expense</button>
      )}
    </div>
  )
}

export default NewExpense
