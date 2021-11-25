import s from "./../Dialogs.module.css";

const Message = (props) => {
  return <div className={s.message +" "+ props.position}>{props.message}</div>;
};

export default Message;