import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import image from "../../assets/header.jpg";
import { Fragment } from "react";
import MealSummary from "../Layout/MealSummary";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>HIGHBEE-TakeOut</h1>
        <HeaderCartButton show={props.show} />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="A table full of Delicious Meals" />
      </div>
      <MealSummary />
    </Fragment>
  );
};

export default Header;
