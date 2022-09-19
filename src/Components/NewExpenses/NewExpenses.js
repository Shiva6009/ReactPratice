import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const saveButtonHandler = (savedExpenseData) => {
    props.propsFromApp(savedExpenseData)
  };
  return (
    <div className="new-expense">
      <ExpenseForm saveButtonProps={saveButtonHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpenses;
