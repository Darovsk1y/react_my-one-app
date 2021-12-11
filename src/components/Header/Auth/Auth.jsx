import s from "./../Header.module.css";
import { NavLink } from 'react-router-dom';

let Auth = (props) => {
  return (
    <div className={s.loginBlock}>
		{props.isAuth ? 
		<div className={s.login}>User: {props.login}</div> : 
		<NavLink to={"/login"}>Login Up</NavLink>}
     
    </div>
  );
};
export default Auth;