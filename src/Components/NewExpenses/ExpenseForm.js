import React, { useState } from "react";

const ExpenseForm = (props) => {
  // Individual state for inidvidual Input
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState(
  //     {
  //         enteredTitle: '',
  //         enteredAmount: '',
  //         enteredDate: ''

  //     }
  // )

  const titleChangeHandler = (event) => {
    // Individual Update
    setEnteredTitle(event.target.value);

    // Group Update
    // setUserInput(
    //     {
    //         ...userInput,
    //         enteredTitle: event.target.value
    //     }
    // );

    // Update Based on Previous State
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredTitle: event.target.value
    //     }
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const whenSubmitCliked = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      date: enteredDate,
      amount: enteredAmount,
    };

 //   console.log(" Output Data ", expenseData);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");

    props.saveButtonProps(expenseData)
  };
  return (
    <form onSubmit={whenSubmitCliked}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
