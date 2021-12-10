import { NavLink } from "react-router-dom";
import s from "./User.module.css";
let User = (props) => {
  return (
    <li className={s.user} key={props.id}>
      <div className={s.user__body}>
        <div className={s.user__avatarBlock}>
          <NavLink to={props.link} className={s.user__avatar}>
            <img src={props.avatar} alt="" />
          </NavLink>
        </div>
        <div className={s.user__infoBlock}>
          <div className={s.user__main}>
            <NavLink to={props.link} className={s.user__nameLink}>
              <div className={s.user__name}>{props.name}</div>
            </NavLink>
            <div className={s.user__status}>{props.status}</div>
			{
				props.isfollow ? <button type="button" className={s.user__button} onClick={(() => {props.unfollow(props.id)})}>UnFollow</button> : 
				<button type="button" className={s.user__button} onClick={(() => {props.follow(props.id)})}>Follow</button>
			}
			
          </div>
          <div className={s.user__right}>
            <div className={s.user__country}>{"props.adress.country"}</div>
            <div className={s.user__city}>{"props.adress.city"}</div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default User;
