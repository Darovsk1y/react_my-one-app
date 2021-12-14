
import { connect } from "react-redux";
import { getUsersThunk, getUsersActivePageThunk, unfollowThunk, followThunk } from './../../redux/users_reducer';
import User from "./User/User";
import React from "react";
import UsersPresent from "./UsersPresent";
import Preloader from './../../global/preloader';

class UsersApi extends React.Component {
	componentDidMount(){
		this.props.getUsersThunk(this.props.activePage, this.props.pageSize);
	}
	clickActivePage = (page) =>{
		this.props.getUsersActivePageThunk(page, this.props.pageSize, this.pagesOrderingFinish);
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
			isDisabled={this.props.isDisabled}
			unfollowThunk={this.props.unfollowThunk}
			followThunk={this.props.followThunk}
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
	  
	  return <>
		  {this.props.isfetching ? 
			<Preloader/>
		   : null}
		<UsersPresent pages={pages}
					mapUsers={this.mapUsers}
					clickActivePage={this.clickActivePage}
					activePage={this.props.activePage}
					isDisabled={this.props.isDisabled}
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
		isDisabled: state.users.isDisabled,
})

const UsersContainer = connect(mapStateToProps, {
	getUsersThunk,
	getUsersActivePageThunk,
	unfollowThunk,
	followThunk,
})(UsersApi);
export default UsersContainer;
