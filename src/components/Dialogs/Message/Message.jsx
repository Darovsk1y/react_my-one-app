import s from "./Message.module.css";

const Message = (props) => {
  return (
	  <div className={s.row}>
		  <a href={props.link} className={s.image}>
			  <img src={props.image} alt=""></img>
		  </a>
		  <div className={s.message}>{props.message}</div>
	  </div>
  );
};

export default Message;