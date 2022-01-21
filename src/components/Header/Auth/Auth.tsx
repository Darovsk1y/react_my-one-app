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
			<div className={s.login}>User: {props.login}</div>
		</div>
		 : 
		<NavLink to={"/login"}>Login Up</NavLink>}
    </div>
  );
};
export default Auth;