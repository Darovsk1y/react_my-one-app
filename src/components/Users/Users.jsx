/* Файл старый . нигде не используется */
import User from "./User/User";
import s  from "./Users.module.css";
const axios = require('axios');
const Users = (props) =>{

	let getUsers = () => {
		if(props.users.length === 0){
			axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => 
				{
					props.setUsers(response.data.items);
				}
			);
		}
	}

	let userElements = (props.users.map(u => {
		return (
			<User 
				id = {u.id}
				name = {u.name}
				status = {u.status}
				adress = {"u.adress"}
				avatar = {u.photos.large != null ? u.photos : "https://i0.wp.com/slovami.net/wp-content/uploads/2018/04/1-36-1024x1024.jpg"}
				isfollow = {u.followed}
				link = {"/profile/" + u.id}
				follow= {props.follow}
				unfollow= {props.unfollow}
			/>
		)
	}));

	return (
		<div className={s.users}>
			<div className={s.body}>
				<button type="button" className={s.button} onClick={getUsers}>Get Users</button>
				<ul className={s.userList}>
					{userElements}
				</ul>
				<button type="button" className={s.button}>Load more</button>
			</div>
		</div>
	);
};
export default Users;