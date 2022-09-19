
import React  , {useState}  from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {

    const expenseDate = props.date
    const expenseTitle = props.title
    const expenseAmount = props.amount


   const[title , setTitle] =  useState(expenseTitle)
    
    const clickHandler = () => {
        console.log(" Button Cliked..")
        setTitle("UpatedValue")
    }
 
    return (
        <div className="expense-item">
            <div>
                <ExpenseDate date={expenseDate}></ExpenseDate>
            </div>
            <div className="expense-item__description" >
                <h2>{title}</h2>
                <div className="expense-item__price" >
                    {'$' + expenseAmount}
                </div>
                <button onClick={clickHandler} >Click</button>
            </div>
        </div>
    )
}

export default ExpenseItem;