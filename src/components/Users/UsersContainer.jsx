
import { connect } from "react-redux";
import { unfollow, setUsers, setActivePage, setTotalUsersCount, follow, toggelFetching } from './../../redux/users_reducer';
import User from "./User/User";
import React from "react";
import UsersPresent from "./UsersPresent";
import Preloader from './../../global/preloader';
import { getUsers } from './../../api/api';
/* КЛК перенесена сюда в КК */
class UsersApi extends React.Component {
	componentDidMount(){
		this.props.toggelFetching(true);
	  getUsers(this.props.activePage, this.props.pageSize)
		.then((data) => {
			this.props.toggelFetching(false);
		  this.props.setUsers(data.items);
		  this.props.setTotalUsersCount(data.totalCount);
		});
	}
	clickActivePage = (page) =>{
		this.props.toggelFetching(true);
	  this.props.setActivePage(page);
	  getUsers(page, this.props.pageSize)
	  .then((data) => {
		this.props.toggelFetching(false);
		this.props.setUsers(data.items);
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
			link={"/profile/" + u.id}
			follow={this.props.follow}
			unfollow={this.props.unfollow}
			setUsers={this.props.setUsers}
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
	  return <>
		  {this.props.isfetching ? 
			<Preloader/>
		   : null}
		<UsersPresent pages={pages}
					mapUsers={this.mapUsers}
					clickActivePage={this.clickActivePage}
					activePage={this.props.activePage}
		/>
	  </>
	}
  }

let mapStateToProps = (state) =>({

		users: state.users.users,
		pageSize: state.users.pageSize,
		totalUsersCount: state.users.totalUsersCount,
		activePage: state.users.activePage,
		isfetching: state.users.isfetching,

})

const UsersContainer = connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setActivePage,
	setTotalUsersCount,
	toggelFetching,
})(UsersApi);
export default UsersContainer;
