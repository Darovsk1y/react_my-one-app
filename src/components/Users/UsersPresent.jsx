/* Презентационная компонента */
import s from "./Users.module.css";

let UsersPresent = (props) => {
	return (
		<div className={s.users}>
		  <div className={s.body}>
			  <div className={s.paginnation}>
				  {props.pages.map(page => {
					  return <span className={props.activePage === page ? s.paginpage +" "+ s.active : s.paginpage} onClick={() =>{props.clickActivePage(page)}}>{page}</span>
				  })}
			  </div>
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
