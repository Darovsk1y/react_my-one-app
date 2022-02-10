import { NavLink } from "react-router-dom";
import s from "./Friend.module.css";
type Props = {
	id:number
	key:number
	image?:string
	name:string |null
	followed:boolean
}
const Friend = (props:Props) => {
  return (
    <li className={s.friend}>
        <NavLink to={`profile/${props.id}`} className={s.item}>
			<div className={s.image}>
			<img
				src={props.image}
				alt=""
			></img>
			</div>
			<div className={s.name}>{props.name}</div>
		</NavLink>
    </li>
  );
};
export default Friend;
