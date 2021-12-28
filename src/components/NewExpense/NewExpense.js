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
    
    return (
        <div className='new-expense'>
           <ExpenseForm onSaveExpenseForm={saveNewExpense} /> 
        </div>
    );
};

export default NewExpense;