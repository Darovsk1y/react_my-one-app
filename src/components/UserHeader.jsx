import UserLogo from "./UserLogo";
import UserInfo from "./User-Info";
import "./UserHeader.css";
const UserHeader = () =>{
	return(
		<div className="user-main__header">
		<UserLogo/>
		<UserInfo/>
	  </div>
	);
};
export default UserHeader;