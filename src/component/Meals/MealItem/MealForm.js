import { useState } from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealForm.module.css";

const MealForm = (props) => {
  const [amount, setAmount] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    console.log(amount);
  };

  const amountChangeHandler = event => {
    setAmount(event.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        id="amount"
        type="number"
        step="1"
        min="1"
        max="5"
        value={amount}
        onChange={amountChangeHandler}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealForm;
