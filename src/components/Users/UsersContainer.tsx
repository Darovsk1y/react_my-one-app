
import { connect } from "react-redux";
import { getUsersThunk, getUsersActivePageThunk, unfollowThunk, followThunk } from '../../redux/users_reducer';
import React from "react";
import UsersPresent from "./UsersPresent";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import Preloader from '../global/Preloader/preloader';
import { getUsersIsDisabled, getUsersUsers, getUsersIsfetching, 
	getUsersActivePage, getUsersTotalUsersCount, getUsersPageSize, getUsersMaxbaselight } from '../../redux/selectors/users_selectors';
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/redux_store";
type PropsType = {
	users:Array<UserType>
	pageSize:number
	totalItemsCount:number
	activePage:number
	isfetching:boolean
	isDisabled:Array<number>
	maxbaselight:number
	getUsersThunk:(activePage:number, pageSize:number) => void
	getUsersActivePageThunk:(activePage:number, pageSize:number) => void
	unfollowThunk:(id:number)=>void
	followThunk:(id:number)=>void
}

class UsersApi extends React.Component<PropsType> {
	pagesCount = Math.ceil(this.props.totalItemsCount/this.props.pageSize);
	componentDidMount(){
		this.props.getUsersThunk(this.props.activePage, this.props.pageSize);
	}
	clickActivePage = (page:number) =>{
		//todo логика проверки перенесена в Пагинатор
		this.props.getUsersActivePageThunk(page, this.props.pageSize);
	}
  
	render() {
	  return <>
		  {this.props.isfetching ? 
			<Preloader/>
		   : null}
		<UsersPresent 
			users={this.props.users}
			clickActivePage={this.clickActivePage}
			activePage={this.props.activePage}
			totalItemsCount={this.props.totalItemsCount}
			pageSize={this.props.pageSize}
			isDisabled={this.props.isDisabled}
			maxbaselight={this.props.maxbaselight}
			unfollowThunk={this.props.unfollowThunk}
			followThunk={this.props.followThunk}
		/>
	  </>
	}
  }

let mapStateToProps = (state: AppStateType) =>({
	//это селекторы
		users: getUsersUsers(state),
		pageSize: getUsersPageSize(state),
		totalItemsCount: getUsersTotalUsersCount(state),
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
