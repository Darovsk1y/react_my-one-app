import s from "./../Header.module.css";
import { NavLink } from 'react-router-dom';

let Auth = (props) => {
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