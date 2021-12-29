/* Презентационная компонента */
import { Paginator } from "../global/Paginator/Paginator";
import s from "./Users.module.css";

let UsersPresent = (props) => {
	return (
		<div className={s.users}>
		  <div className={s.body}>
			  {/* вынесена в отдельный файл*/}
			  <Paginator 
			  	activePage={props.activePage}
				totalUsersCount={props.totalUsersCount}
				pageSize={props.pageSize}
				clickActivePage={props.clickActivePage}
			  />
			<ul className={s.userList}>
			  {props.mapUsers()}
			</ul>
			<button type="button" className={s.button}>
			  Load more
			</button>
		  </div>
		</div>
	  );
	}
export default UsersPresent;
