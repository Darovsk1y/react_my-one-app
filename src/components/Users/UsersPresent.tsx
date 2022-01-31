/* Презентационная компонента */
import { FilterType } from "../../redux/users_reducer";
import { UserType } from "../../types/types";
import { Paginator } from "../global/Paginator/Paginator";
import User from "./User/User";
import s from "./Users.module.css";
import UsersSearchForm from "./UsersSearchForm";

type PropsType = {
	activePage:number
	totalItemsCount:number
	pageSize:number
	clickActivePage:(page:number)=>void
	maxbaselight:number
	users:Array<UserType>
	isDisabled:Array<number>
	unfollowThunk:(id:number)=>void
	followThunk:(id:number)=>void
	onFilterChanged:(filter:FilterType)=>void
}
let UsersPresent:React.FC<PropsType> = (props) => {
	return (
		<div className={s.users}>
		  <div className={s.body}>
			  <UsersSearchForm onFilterChanged={props.onFilterChanged} />
			  {/* вынесена в отдельный файл*/}
			  <Paginator 
			  	activePage={props.activePage}
				totalItemsCount={props.totalItemsCount}
				pageSize={props.pageSize}
				clickActivePage={props.clickActivePage}
				maxbaselight={props.maxbaselight}
			  />
			<ul className={s.userList}>
			  {
				  props.users.map((u) => {
					return <User
					  key={u.id}
					  id={u.id}
					  name={u.name}
					  status={u.status}
					  avatar={u.photos.small}
					  isfollow={u.followed}
					  link={"/profile/" + u.id}
					  isDisabled={props.isDisabled}
					  unfollowThunk={props.unfollowThunk}
					  followThunk={props.followThunk}
					/>
				  })
			  }
			</ul>
			<button type="button" className={s.button}>
			  Load more
			</button>
		  </div>
		</div>
	  );
	}
export default UsersPresent;
