//import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  // const [title, setJudul] = useState(props.judul);
  // const clickHandler = () => {
  //   setJudul('Update!');
  // }

  return (
    <li>
    <Card className='expense-item'>  
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.judul}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;
