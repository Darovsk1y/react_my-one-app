import s from "./Message.module.css";
type Props = {
	position:string
	message:string
	image:string
	link:string
	key:number
}
const Message = (props:Props) => {
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