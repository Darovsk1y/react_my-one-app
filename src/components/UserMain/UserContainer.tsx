import React from "react";
import User from "./User";
import { connect } from 'react-redux';
import { getProfileThusk, setStatusThusk, updateStatusThusk, savePhotoThunk, 
	setFormThunk, actions } from '../../redux/profile_reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import { ProfileType } from "../../types/types";
import { AppStateType } from "../../redux/redux_store";
import { Navigate, useMatch } from "react-router-dom";
//! todo КК сейчас не используется
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
	getProfileThusk:(id:number)=>void
	setStatusThusk:(id:number)=>void
	updateStatusThusk:(status:string)=>void
	savePhotoThunk:(file:File)=>void
	setFormThunk:(file:ProfileType)=>void
	setEditMode: (editMode: boolean)=>void
}
type PropsOwnType = {
	match: any | null
}
type PropsType = MapStatePropsType & MapDispatchPropsType & PropsOwnType

class UserContainer extends React.Component<PropsType> {
	isOwner:boolean = false;
	refreshProfile(){
		//let userId = this.props.id ? +this.props.id : this.props.authID;
		let userId = this.props.match ? this.props.match.params.userId : this.props.authID;
		if(userId){
			this.props.getProfileThusk(userId);
			this.props.setStatusThusk(userId);
		}else{
			return <Navigate to={"/login"}/>
		}
	
	}
	componentDidMount(){
		this.refreshProfile();
		
	}
	componentDidUpdate(prevProps:PropsType, prevState:PropsType){
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
			setEditMode={this.props.setEditMode}
			editMode={this.props.editMode}
			/>
		  )
		}
}
let mapStateToProps = (state: AppStateType) =>({
	profile: state.profile.profile,
	authID: state.auth.id,
	status: state.profile.status,
	editMode: state.profile.editMode,
})
type ConnectType = MapStatePropsType & MapDispatchPropsType & OwnPropsType & AppStateType
const ProfileMatch = (props:ConnectType) => {
	let match = useMatch("/profile/:userId");
	return (
		<UserContainer {...props} match={match}/>
	)
}
type OwnPropsType={}
export default compose<React.ComponentType>
( connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
	(mapStateToProps, {getProfileThusk, setStatusThusk, updateStatusThusk, 
		savePhotoThunk, setFormThunk, setEditMode: actions.setEditMode})
		,withAuthRedirect)(ProfileMatch);