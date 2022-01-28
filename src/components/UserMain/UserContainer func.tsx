import React from "react";
import User from "./User";
import { connect } from 'react-redux';
import { getProfileThusk, setStatusThusk, updateStatusThusk, savePhotoThunk, 
	setFormThunk, actions } from '../../redux/profile_reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import { ProfileType } from "../../types/types";
import { AppStateType } from "../../redux/redux_store";
import { useParams, Navigate } from "react-router-dom";

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
	id?: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & PropsOwnType
function getParams () {
	return useParams();
} 
const Uid = getParams;
class UserContainer extends React.Component<PropsType> {
	isOwner:boolean = false;
	refreshProfile(){
		let userId = this.props.id ? +this.props.id : this.props.authID;
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
		if(this.props.id && this.props.id !== prevProps.id){
			this.refreshProfile();
		} else if(!this.props.id && this.props.id !== prevProps.id){
			this.refreshProfile();
		}
	}
	
	render () {
		debugger
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
	const params = useParams();
	const id = params.id
	return (
		<UserContainer {...props} id={id}/>
	)
}
type OwnPropsType={}
export default compose<React.ComponentType>
( connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
	(mapStateToProps, {getProfileThusk, setStatusThusk, updateStatusThusk, 
		savePhotoThunk, setFormThunk, setEditMode: actions.setEditMode})
		,withAuthRedirect)(ProfileMatch);