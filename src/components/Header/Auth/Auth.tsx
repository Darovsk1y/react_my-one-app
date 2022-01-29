import s from "./../Header.module.css";
import { NavLink } from 'react-router-dom';
import { ProfileType } from "../../../types/types";
type PropsType = {
	onOut: ()=>void
	login: string | null
	isAuth: boolean
	//todo наверное его брали что бы вывести данные акт. пользователя такие как аватар и имя
	activeUser: ProfileType | null
}
let Auth = (props:PropsType) => {
  return (
    <div className={s.loginBlock}>
		{props.isAuth ? 
		<div className={s.authLine}>
			<button className={s.logout} onClick={props.onOut}>Log out</button>
			{props.activeUser ?
				<NavLink to ={"/profile"} className={s.avatarBlock}>
					<img src={props.activeUser.photos.large ? props.activeUser.photos.large : ""} alt="Avatar" className={s.avatarImage}/>
				</NavLink>
				: ""
			}
			<NavLink to ={"/profile"} className={s.login}>User: {props.login}</NavLink>
		</div>
		 : 
		<NavLink to={"/login"}>Login Up</NavLink>}
    </div>
  );
};
export default Auth;