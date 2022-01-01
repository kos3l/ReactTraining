import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
//whenever u use to way binding u create a controlled compontent
//the compontent is controlled by the parent compontent, the logic resides in ther when listeners are in the controlled one
//always add key when you map arrays (react cant see a difference between elements in the array and sees that it got longer so it rewrites it which can make bugs, always add a key)

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const savePickedYear = (enteredPickedYear) => {
    setFilteredYear(enteredPickedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onPickedYear={savePickedYear} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
