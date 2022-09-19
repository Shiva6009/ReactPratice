import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(2020);
  const items = props.item;
  console.log(" Items ", items);
  const yearChangeHandler = (selectedValue) => {
    console.log(" Selected Value ", selectedValue);
    setFilteredYear(selectedValue);
  };

  return (
    <div className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        yearPassingProps={yearChangeHandler}
      />
      {items.map((expensesvalue) => (
        <ExpenseItem
          title={expensesvalue.title}
          amount={expensesvalue.amount}
          date={expensesvalue.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
