import s from "./User.module.css";
let User = (props) => {
  return (
    <li className={s.user}>
      <div className={s.user__body}>
        <div className={s.user__avatarBlock}>
          <a href={props.link} className={s.user__avatar}>
            <img src={props.avatar} alt="" />
          </a>
        </div>
        <div className={s.user__infoBlock}>
          <div className={s.user__main}>
            <a href={props.link} className={s.user__nameLink}>
              <div className={s.user__name}>{props.name}</div>
            </a>
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
