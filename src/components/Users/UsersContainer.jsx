
import { connect } from "react-redux";
import { getUsersThunk, getUsersActivePageThunk, unfollowThunk, followThunk } from './../../redux/users_reducer';
import User from "./User/User";
import React from "react";
import UsersPresent from "./UsersPresent";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from "redux";
import Preloader from './../global/Preloader/preloader';
import { getUsersIsDisabled, getUsersUsers, getUsersIsfetching, 
	getUsersActivePage, getUsersTotalUsersCount, getUsersPageSize, getUsersMaxbaselight } from './../../redux/selectors/users_selectors';

class UsersApi extends React.Component {
	pagesCount = Math.ceil(this.props.totalItemsCount/this.props.pageSize);
	componentDidMount(){
		this.props.getUsersThunk(this.props.activePage, this.props.pageSize);
	}
	clickActivePage = (page) =>{
		if(page<1){return}
		if(page>this.pagesCount){return}
		this.props.getUsersActivePageThunk(page, this.props.pageSize);
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
  
	render() {
	  return <>
		  {this.props.isfetching ? 
			<Preloader/>
		   : null}
		<UsersPresent 
					mapUsers={this.mapUsers}
					clickActivePage={this.clickActivePage}
					activePage={this.props.activePage}
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					isDisabled={this.props.isDisabled}
					maxbaselight={this.props.maxbaselight}
		/>
	  </>
	}
  }

let mapStateToProps = (state) =>({
		users: getUsersUsers(state),
		pageSize: getUsersPageSize(state),
		totalUsersCount: getUsersTotalUsersCount(state),
		activePage: getUsersActivePage(state),
		isfetching: getUsersIsfetching(state),
		isDisabled: getUsersIsDisabled(state),
		maxbaselight: getUsersMaxbaselight(state),
})

export default compose(connect(mapStateToProps, {
	getUsersThunk,
	getUsersActivePageThunk,
	unfollowThunk,
	followThunk,
}), withAuthRedirect)(UsersApi);
