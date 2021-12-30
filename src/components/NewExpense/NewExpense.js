import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    
    const saveNewExpense = newExpenseData => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }

        props.onAddNewExpense(expenseData);
    };
    
    const [clearButton, setClearButton] = useState(false);

    const clickedCancel = () => {
        setClearButton(false);
        
    };

    const AddNewExpenseHandler = () => {
        setClearButton(true);
    };

    return (
        <div className='new-expense'>
        {!clearButton && <button onClick={AddNewExpenseHandler}>Add New Expense</button>}           
        {clearButton && <ExpenseForm onSaveExpenseForm={saveNewExpense} onCancelClickedBack={clickedCancel}/>}
        </div>
    );
};

export default NewExpense;