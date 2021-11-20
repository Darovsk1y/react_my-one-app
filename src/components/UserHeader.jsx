import UserLogo from "./UserLogo";
import UserInfo from "./User-Info";
import s from "./UserHeader.module.css";
const UserHeader = () =>{
	return(
		<div className={s.header}>
		<UserLogo/>
		<UserInfo/>
	  </div>
	);
};
export default UserHeader;