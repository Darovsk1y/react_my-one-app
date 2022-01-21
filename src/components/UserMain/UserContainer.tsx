import React from "react";
import User from "./User";
import { connect } from 'react-redux';
import { getProfileThusk, setStatusThusk, updateStatusThusk, savePhotoThunk, setFormThunk } from '../../redux/profile_reducer';
import { useMatch } from "react-router";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import { ProfileType } from "../../types/types";
import { AppStateType } from "../../redux/redux_store";

type MapStatePropsType = {
	profile: ProfileType | null
	authID: number | null
	status: string
}
type MapDispatchPropsType = {
	getProfileThusk:(id:number)=>void
	setStatusThusk:(id:number)=>void
	updateStatusThusk:(status:string)=>void
	savePhotoThunk:(file:any)=>void
	setFormThunk:(file:any)=>void
}
type PropsOwnType = {
	//! Сделать с Димычем то работает то нет
	match: any | null
}
type StateType = {

}
type PropsType = MapStatePropsType & MapDispatchPropsType & PropsOwnType

class UserContainer extends React.Component<PropsType, StateType> {
	isOwner:boolean = false;
	refreshProfile(){
		let userId = this.props.match ? this.props.match.params.userId : this.props.authID;
		/* this.props.auth.activeUser.userId работает но с ошибкой. данные из пропс поздно приходят */
		this.props.getProfileThusk(userId);
		this.props.setStatusThusk(userId);
	}
	componentDidMount(){
		this.refreshProfile();
		
	}
	componentDidUpdate(prevProps:PropsType, prevState:StateType, snapshot:any){
		if(this.props.match && this.props.match.params.userId !== prevProps.match.params.userId){
			this.refreshProfile();
		} else if(!this.props.match && this.props.match !== prevProps.match){
			this.refreshProfile();
		}
	}
	
	render () {
		if(this.props.profile){
			if(this.props.authID === this.props.profile.userId){
				this.isOwner = true
			}else{
				this.isOwner = false
			}
		}

		return (
			<User profile={this.props.profile}  
			updateStatusThusk={this.props.updateStatusThusk}
			status={this.props.status}
			isOwner={this.isOwner}
			savePhotoThunk={this.props.savePhotoThunk}
			setFormThunk={this.props.setFormThunk}
			/>
		  )
		}
}
let mapStateToProps = (state: AppStateType):MapStatePropsType =>({
	profile: state.profile.profile,
	authID: state.auth.id,/*  id active*/
	status: state.profile.status,
})
type ConnectType = MapStatePropsType & MapDispatchPropsType & OwnPropsType & AppStateType
const ProfileMatch = (props:ConnectType) => {
	let match = useMatch("/profile/:userId");
	return (
		<UserContainer {...props} match={match}/>
	)
}
type OwnPropsType={}
//! type ConnectType НЕ РАБОТАЕТ если сделать отдельный стиль и подкл. его. только 4 отдельных
export default compose( connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
	(mapStateToProps, {getProfileThusk, setStatusThusk, updateStatusThusk, savePhotoThunk, setFormThunk})
		,withAuthRedirect)(ProfileMatch);