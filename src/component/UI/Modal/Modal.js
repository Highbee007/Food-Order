import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClose} />, document.getElementById("overlay"))}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default Modal;
