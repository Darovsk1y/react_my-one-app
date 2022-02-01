import React, { useEffect } from "react";
import User from "./User";
import { connect } from 'react-redux';
import { getProfileThusk, setStatusThusk, updateStatusThusk, savePhotoThunk, 
	setFormThunk, actions } from '../../redux/profile_reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import { ProfileType } from "../../types/types";
import { AppStateType } from "../../redux/redux_store";
import { useParams, Navigate} from "react-router-dom";
//todo ФК сейчас используется
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
	getProfileThusk:(id:number)=>void
	setStatusThusk:(id:number)=>void
	updateStatusThusk:(status:string)=>void
	savePhotoThunk:(file:File)=>void
	setFormThunk:(file:ProfileType)=>void
	setEditMode: (editMode: boolean)=>void
}
type PropsOwnType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & PropsOwnType

let UserContainer:React.FC<PropsType> = (props) => {
	let isOwner:boolean = false;
	let params = useParams();
	//! что за дичь у меня обьект с ключем *
	let userId = params[`*`] ? +params[`*`] : props.authID;

	let refreshProfile = () => {
		if(userId){
			props.getProfileThusk(userId);
			props.setStatusThusk(userId);
		}else{
			return <Navigate to={"/login"}/>
		}
	
	}
	useEffect( ()=>{
		//при каждом рендэре
		refreshProfile();
	}, [userId])
	if(props.profile){
		if(props.authID === props.profile.userId){
			isOwner = true
		}else{
			isOwner = false
		}
	}
	return (
		<User profile={props.profile}  
		updateStatusThusk={props.updateStatusThusk}
		status={props.status}
		isOwner={isOwner}
		savePhotoThunk={props.savePhotoThunk}
		setFormThunk={props.setFormThunk}
		setEditMode={props.setEditMode}
		editMode={props.editMode}
		/>
		)
}
let mapStateToProps = (state: AppStateType) =>({
	profile: state.profile.profile,
	authID: state.auth.id,
	status: state.profile.status,
	editMode: state.profile.editMode,
})

type OwnPropsType={}
export default compose<React.ComponentType>
( connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
	(mapStateToProps, {getProfileThusk, setStatusThusk, updateStatusThusk, 
		savePhotoThunk, setFormThunk, setEditMode: actions.setEditMode})
		,withAuthRedirect)(UserContainer);