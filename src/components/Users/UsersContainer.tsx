
import { connect } from "react-redux";
import { getUsersThunk, getUsersActivePageThunk, unfollowThunk, followThunk, FilterType } from '../../redux/users_reducer';
import React from "react";
import UsersPresent from "./UsersPresent";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import Preloader from '../global/Preloader/preloader';
import { getUsersIsDisabled, getUsersUsers, getUsersIsfetching, 
	getUsersActivePage, getUsersTotalUsersCount, getUsersPageSize, getUsersMaxbaselight, getUsersFilter } from '../../redux/selectors/users_selectors';
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/redux_store";

//todo разделение входящих пропсов по разделам
type MapStatePropsType = {
	users:Array<UserType>
	pageSize:number
	totalItemsCount:number
	activePage:number
	isfetching:boolean
	isDisabled:Array<number>
	maxbaselight:number
	filter:FilterType
}
type MapDispatchPropsType = {
	getUsersThunk:(activePage:number, pageSize:number) => void
	getUsersActivePageThunk:(activePage:number, pageSize:number, filter:FilterType) => void
	unfollowThunk:(id:number)=>void
	followThunk:(id:number)=>void
}
type OwnPropsType = {
	pageTitle:string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersApi extends React.Component<PropsType> {
	pagesCount = Math.ceil(this.props.totalItemsCount/this.props.pageSize);
	componentDidMount(){
		this.props.getUsersThunk(this.props.activePage, this.props.pageSize);
	}
	clickActivePage = (page:number) =>{
		//todo логика проверки перенесена в Пагинатор
		this.props.getUsersActivePageThunk(page, this.props.pageSize, this.props.filter);
	}
	onFilterChanged = (filter:FilterType) =>{
		const {pageSize} = this.props;
		this.props.getUsersActivePageThunk(1, pageSize, filter)
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
			onFilterChanged={this.onFilterChanged}
		/>
		{/* Для теста передачи прямых пропсов не через коннект */}
		<h2>{this.props.pageTitle}</h2>
	  </>
	}
  }

let mapStateToProps = (state: AppStateType):MapStatePropsType =>({
	//это селекторы
		users: getUsersUsers(state),
		pageSize: getUsersPageSize(state),
		totalItemsCount: getUsersTotalUsersCount(state),
		activePage: getUsersActivePage(state),
		isfetching: getUsersIsfetching(state),
		isDisabled: getUsersIsDisabled(state),
		maxbaselight: getUsersMaxbaselight(state),
		filter: getUsersFilter(state),
})

//? cntrl + click on connect что бы увидеть что сидит в ожидаемых react-redux типах
//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
//todo т.е. Оказалось connect содержит всё сразу, вернее это то что в него приходит
export default compose<React.ComponentType>(connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
	getUsersThunk,
	getUsersActivePageThunk,
	unfollowThunk,
	followThunk,
}), withAuthRedirect)(UsersApi);
