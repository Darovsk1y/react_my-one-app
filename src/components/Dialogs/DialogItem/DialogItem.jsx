import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialogsItem}>
      <NavLink to={"/dialogs/" + props.id} className={s.link}>
        <div className={s.dialog}></div>
      </NavLink>
      <Dialog name={props.name} image={props.image} text={props.text} />
    </div>
  );
};

export default DialogItem;