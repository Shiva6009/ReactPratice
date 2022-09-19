import logo from "./logo.svg";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: "89.6",
      date: new Date(2022, 9, 19),
    },
    {
      title: "Bike Chsrges",
      amount: "897.6",
      date: new Date(2021, 9, 19),
    },
    {
      title: "System",
      amount: "9.6",
      date: new Date(2022, 9, 19),
    },
    {
      title: "RAM",
      amount: "1.6",
      date: new Date(2020, 8, 19),
    },
  ];

  const saveDataFromExpenseForm = (savedExpenseData) => {
    console.log(" Data in App ", savedExpenseData);
  };

  return (
    <div className="App">
      <NewExpenses propsFromApp={saveDataFromExpenseForm}></NewExpenses>
      <Expenses item={expenses} />
    </div>
  );
}
export default App;
