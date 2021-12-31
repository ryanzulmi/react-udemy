import { useState } from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const expenses = props.expenses;

    const [filteredYear, setFilteredYear] = useState('2021');
    
    const selectedYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear); 
    };  

    const filteredExpenses = expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear);
  
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSelectedYear={selectedYearHandler}/>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;
