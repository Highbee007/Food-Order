import classes from "./Cart.module.css";
// import CartItem from "./CartItem";
import Modal from "../UI/Modal/Modal";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      {/* <CartItem /> */}
      <div className={classes.total}>
        <span>Your Total Amount:</span>
        <span>0.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose} >Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
