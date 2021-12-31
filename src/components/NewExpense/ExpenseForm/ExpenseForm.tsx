import React, {useState} from "react"

import {Expense} from "../../../types"
import "./ExpenseForm.css"

type ChangeEventInput = React.ChangeEvent<HTMLInputElement>
type SubmitEventForm = React.FormEvent<HTMLFormElement>

interface ExpenseFormProps {
  onSaveExpenseData: (formExpenseData: Expense) => void
  setShowExpenseForm: (bool: boolean) => void
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({onSaveExpenseData, setShowExpenseForm}) => {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState<number>(0)
  const [date, setDate] = useState("")

  const titleChangeHandler = (e: ChangeEventInput) => {
    setTitle(e.target.value)
  }

  const amountChangeHandler = (e: ChangeEventInput) => {
    setAmount(parseFloat(e.target.value))
  }
  const dateChangeHandler = (e: ChangeEventInput) => {
    setDate(e.target.value)
  }

  const submitHandler = (e: SubmitEventForm) => {
    e.preventDefault()

    const expenseData = {
      title,
      amount,
      date: new Date(date),
    }

    setTitle("")
    setAmount(0)
    setDate("")

    onSaveExpenseData(expenseData)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            min="0.01"
            name="amount"
            step="0.01"
            type="number"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            max="2023-12-31"
            min="2021-01-01"
            name="date"
            type="date"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          type="button"
          onClick={() => {
            setShowExpenseForm(false)
          }}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
