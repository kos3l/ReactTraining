import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
//all the props are put into one object accessable with a name u want like 'props'
function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> $ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
