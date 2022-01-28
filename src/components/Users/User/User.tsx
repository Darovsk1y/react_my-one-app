import { NavLink } from "react-router-dom";
import s from "./User.module.css";

type UserType = {
	key:number
	id:number
	name:string | null
	status:string | null
	avatar:string | null
	isfollow:boolean
	link:string
	isDisabled:Array<number>
	unfollowThunk:(id:number)=>void
	followThunk:(id:number)=>void
}
let User = (props:UserType) => {
  return (
    <li className={s.user}>
      <div className={s.user__body}>
        <div className={s.user__avatarBlock}>
          <NavLink to={props.link} className={s.user__avatar}>
            <img src={props.avatar ? props.avatar 
				: "https://i0.wp.com/slovami.net/wp-content/uploads/2018/04/1-36-1024x1024.jpg"} alt="" />
          </NavLink>
        </div>
        <div className={s.user__infoBlock}>
          <div className={s.user__main}>
            <NavLink to={props.link} className={s.user__nameLink}>
              <div className={s.user__name}>{props.name}</div>
            </NavLink>
            <div className={s.user__status}>{props.status}</div>
			{
				props.isfollow ? 
				<button type="button" className={s.user__button} disabled={props.isDisabled.some(id => id === props.id)} onClick={(() => {
					props.unfollowThunk(props.id)
				})}>UnFollow</button> :

				<button type="button" className={s.user__button} disabled={props.isDisabled.some(id => id === props.id)} onClick={(() => {
					props.followThunk(props.id)
				})}>Follow</button>
			}
			
          </div>
        </div>
      </div>
    </li>
  );
};
export default User;
