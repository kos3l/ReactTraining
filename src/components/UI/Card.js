import "../UI/Card.css";
const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
//children is a reserved name, value is always the content between opening and closing tags of the compontent
//to be able to add classes outside u have to change the code so
export default Card;
