import UsersApi from "./UsersApi";
import { connect } from "react-redux";
import { followAC } from "../../redux/users_reducer";
import { unfollowAC, setUsersAC, setActivePageAC, setTotalUsersCountAC } from './../../redux/users_reducer';



let mapStateToProps = (state) =>{
	return {
		users: state.users.users,
		pageSize: state.users.pageSize,
		totalUsersCount: state.users.totalUsersCount,
		activePage: state.users.activePage,
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
		},
		setActivePage: (page) =>{
			dispatch(setActivePageAC(page));
		},
		setTotalUsersCount: (usersCount) =>{
			dispatch(setTotalUsersCountAC(usersCount));
		},
	}
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApi);
export default UsersContainer;
