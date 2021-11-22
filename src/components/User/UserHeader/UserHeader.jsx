import UserAvatar from "./UserAvatar";
import UserInfo from "./User-Info";
import s from "./UserHeader.module.css";
const UserHeader = () =>{
	return(
		<div className={s.header}>
		<UserAvatar/>
		<UserInfo/>
	  </div>
	);
};
export default UserHeader;