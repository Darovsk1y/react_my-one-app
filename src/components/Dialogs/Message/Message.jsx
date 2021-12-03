import s from "./Message.module.css";

const Message = (props) => {
  return (
	 <div className={s.row}>
	 	 {props.position === "left" ? 
			<div className={s.messageblock + " " + s.messageblock_left}>
				<a href={props.link} className={s.image}>
					<img src={props.image} alt=""></img>
				</a>
				<div className={s.message}>{props.message}</div>
			</div>
			:
			<div className={s.messageblock + " " + s.messageblock_right}>
			<a href={props.link} className={s.image}>
				<img src={props.image} alt=""></img>
			</a>
			<div className={s.message}>{props.message}</div>
		</div>
		}
	 </div>
	
  );
};

export default Message;