import React from "react";
import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//all the props are put into one object accessable with a name u want like 'props'
// useState allows for changing of component data fter render if u have buttons
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price"> $ {props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
