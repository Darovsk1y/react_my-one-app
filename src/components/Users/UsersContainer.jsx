import Users from "./UsersC";
import { connect } from "react-redux";
import { followAC } from "../../redux/users_reducer";
import { unfollowAC, setUsersAC } from './../../redux/users_reducer';

let mapStateToProps = (state) =>{
	return {
		users: state.users.users
	};
}
let mapDispatchToProps = (dispatch) =>{
	return {
		follow: (userid) => {
			dispatch(followAC(userid));
		},
		unfollow: (userid) => {
			dispatch(unfollowAC(userid));
		},
		setUser: (users) =>{
			dispatch(setUsersAC(users));
		}
	}
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
