import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const expenses = props.expenses;

    const [filteredYear, setFilteredYear] = useState('2021');

    const selectedYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSelectedYear={selectedYearHandler}/>
      {expenses.map(expenseItemList => <ExpenseItem judul={expenseItemList.title} amount={expenseItemList.amount} date={expenseItemList.date} />)}
      {/* <ExpenseItem
        judul={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        judul={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        judul={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        judul={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}
    </Card>
    </div>
  );
}

export default Expenses;
