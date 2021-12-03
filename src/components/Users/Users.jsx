import User from "./User/User";
import s  from "./Users.module.css";

const Users = (props) =>{
	let userElements = (props.users.map(u => {
		return (
			<User 
				key = {u.id}
				id = {u.id}
				name = {u.name}
				status = {u.status}
				adress = {u.adress}
				avatar = {u.avatar}
				isfollow = {u.isfollow}
				link = {u.link}
				follow= {props.follow}
				unfollow= {props.unfollow}
				setUser= {props.setUser}
			/>
		)
	}));

	return (
		<div className={s.users}>
			<div className={s.body}>
				<ul className={s.userList}>
					{userElements}
				</ul>
				<button type={s.button} className={s.button}>Load more</button>
			</div>
		</div>
	);
};
export default Users;