
import User from "./User/User";
import s  from "./Users.module.css";
const axios = require('axios');
const Users = (props) =>{

	let getUsers = () => {
		if(props.users.length === 0){
			axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => 
				{
					props.setUser(response.data.items);
				}
			);
		}
	}

	

	/* if(props.users.length === 0){
		props.setUser( [
			{
				id: 1,
				name: "Alex",
				status: "введен Э. Эвансом в его »",
				adress: {
					country: "Italy",
					city: "Barselona",
				},
				avatar: "https://ava-24.com/_ph/98/563228947.jpg",
				isfollow: true,
				link: "#/",
			},
			{
				id: 2,
				name: "Dimon",
				status: "введен Э. Эвансом в его книге с таким же названием «Domain-Driven Design. введен Э. Эвансом в его книге с таким же названием «Domain-Driven Design»",
				adress: {
					country: "Italy",
					city: "Barselona",
				},
				avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGte8KLfMOmnVn67KS6LldaFP0XWAMfTKNJQ&usqp=CAU",
				isfollow: false,
				link: "#/",
			},
			{
				id: 3,
				name: "Tonny Gat",
				status: "введен Э. Эвансом в его книге с таким же названием «Domain-Driven Design»",
				adress: {
					country: "Italy",
					city: "Barselona",
				},
				avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh36h4s7bAqe7En8FdKfKJ1MUax-E0WdCmdQ&usqp=CAU",
				isfollow: true,
				link: "#/",
			},
			{
				id: 4,
				name: "Silver Stowm",
				status: "Всем привет друзья! Жду вас в рейдах!",
				adress: {
					country: "Italy",
					city: "Barselona",
				},
				avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pLSGspy6-x9Ih29O3aEP1_Y3ZITOWgh2oA&usqp=CAU",
				isfollow: false,
				link: "#/",
			},
		]);
	} */

	let userElements = (props.users.map(u => {
		return (
			<User 
				key = {u.id}
				id = {u.id}
				name = {u.name}
				status = {u.status}
				adress = {"u.adress"}
				avatar = {u.photos.large != null ? u.photos : "https://ava-24.com/_ph/98/563228947.jpg"}
				isfollow = {u.followed}
				link = {u.link != null ? u.link : "#/"}
				follow= {props.follow}
				unfollow= {props.unfollow}
				setUser= {props.setUser}
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