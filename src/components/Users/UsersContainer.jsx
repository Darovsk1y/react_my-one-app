
import { connect } from "react-redux";
import { followAC } from "../../redux/users_reducer";
import { unfollowAC, setUsersAC, setActivePageAC, setTotalUsersCountAC } from './../../redux/users_reducer';
import User from "./User/User";
import React from "react";
import UsersPresent from "./UsersPresent";
const axios = require("axios");
/* КЛК перенесена сюда в КК */
class UsersApi extends React.Component {
	componentDidMount(){
	  axios
		.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`)
		.then((response) => {
		  this.props.setUser(response.data.items);
		  this.props.setTotalUsersCount(response.data.totalCount);
		});
	}
	clickActivePage = (page) =>{
	  this.props.setActivePage(page);
	  axios
	  .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
	  .then((response) => {
		this.props.setUser(response.data.items);
	  });
	  this.pagesOrderingFinish(page + 20);
	}
	mapUsers = ()=>{
	  return this.props.users.map((u) => {
		  return <User
			key={u.id}
			id={u.id}
			name={u.name}
			status={u.status}
			adress={"u.adress"}
			avatar={
			  u.photos.large != null
				? u.photos.small
				: "https://ava-24.com/_ph/98/563228947.jpg"
			}
			isfollow={u.followed}
			link={u.link != null ? u.link : "#/"}
			follow={this.props.follow}
			unfollow={this.props.unfollow}
			setUser={this.props.setUser}
		  />
		})
	}
	/* Global ut */
	t_start = 1
	pagesOrderingStart = (t_start) =>{
		/* считаем точку начала цикла относительно активоной страницы */
	  this.props.activePage <=10 ? t_start = 1 : t_start = this.props.activePage - 10;
	  return t_start;
	}
	t_finish = 20
	pagesOrderingFinish = (t_finish) =>{
		/* считаем конечную точку цикла в зависимости от активной страницы */
		/* считаем номер конечной страницы и исходим из него */
		let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
		if(this.props.activePage <= pagesCount - 10){
		  this.props.activePage <=10 ? t_finish = this.props.activePage + 20 - this.props.activePage : t_finish = this.props.activePage + 10
		} else {
		  t_finish = pagesCount
		}
	  return t_finish;
	}
  
	render() {
	  let t_start = this.pagesOrderingStart(this.t_start);
	  let t_finish = this.pagesOrderingFinish(this.t_finish);
	  let pages = [];
	  for(t_start; t_start <=t_finish; t_start++){
	  pages.push(t_start);
	  }
	  /* ТАкже в обработчике должна быть именно стрелочная ф-ия иначе всё равно циклится? */
	  return <UsersPresent pages={pages}
						  mapUsers={this.mapUsers}
						  clickActivePage={this.clickActivePage}
						  activePage={this.props.activePage}
	  />
	}
  }

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
