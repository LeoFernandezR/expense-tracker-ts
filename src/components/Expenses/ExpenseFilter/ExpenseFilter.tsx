import React from "react"

import "./ExpenseFilter.css"

type SelectEventFilter = React.ChangeEvent<HTMLSelectElement>

interface ExpenseFilterProps {
  filteredYear: number
  onFilteredYearSelect: (year: number) => void
}

const ExpensesFilter: React.FC<ExpenseFilterProps> = ({onFilteredYearSelect, filteredYear}) => {
  const handleSelectFilter = (e: SelectEventFilter) => {
    onFilteredYearSelect(parseInt(e.target.value))
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={filteredYear} onChange={handleSelectFilter}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
