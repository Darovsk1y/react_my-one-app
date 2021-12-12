import { NavLink } from "react-router-dom";
import s from "./User.module.css";
const axios = require("axios");
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
				props.isfollow ? 
				<button type="button" className={s.user__button} onClick={(() => {
					axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${props.id}`,
					 {withCredentials: true, 
						headers:{"API-KEY": "408e3826-292f-4228-986e-4b5b9de1ce18"},
					})
					.then(response =>{
						if (response.data.resultCode === 0){
							props.unfollow(props.id);
						}
					});
					
				})}>UnFollow</button> :

				<button type="button" className={s.user__button} onClick={(() => {
					axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${props.id}`, {}, 
					{withCredentials: true, 
						headers:{"API-KEY": "408e3826-292f-4228-986e-4b5b9de1ce18"},
					})
					.then(response =>{
						if (response.data.resultCode === 0){
							props.follow(props.id)
						}
					});
					props.follow(props.id)

				})}>Follow</button>
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
