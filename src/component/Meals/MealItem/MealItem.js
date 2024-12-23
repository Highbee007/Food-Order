// import Card from "../../UI/Card/Card";
import MealForm from "./MealForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div className={classes.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.about}>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>${props.price}</p>
      </div>
      <MealForm />
    </li>
  );
};

export default MealItem;
