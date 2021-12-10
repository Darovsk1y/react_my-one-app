import UserAvatar from "./UserAvatar/UserAvatar";
import UserInfo from "./User-Info/UserInfo";
import s from "./UserHeader.module.css";
const UserHeader = (props) =>{
	return(
		<div className={s.header}>
		<UserAvatar avatar={props.profile.photos.large}/>
		<UserInfo {...props}/>
	  </div>
	);
};
export default UserHeader;