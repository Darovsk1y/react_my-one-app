import UserAvatar from "./UserAvatar/UserAvatar";
import UserInfo from "./User-Info/UserInfo";
import s from "./UserHeader.module.css";
import FormEditUserInfo from './FormEditUserInfo/FormEditUserInfo';
import { ProfileType } from "../../../types/types";
import Preloader from './../../global/Preloader/preloader';
type PropsType = {
	profile:ProfileType | null
	updateStatusThusk: (status:string)=>void
	status:string
	isOwner:boolean
	savePhotoThunk:(file:File)=>void
	setFormThunk:(file:ProfileType)=>void
	setEditMode: (editMode: boolean)=>void
	editMode:boolean
}
export type FormEditUserInfoValuesType={
		aboutMe:string | null
		contacts: {
		  facebook: string | null
		  website: string | null
		  vk: string | null
		  twitter: string | null
		  instagram: string | null
		  youtube: string | null
		  github: string | null
		  mainLink: string | null
		}
		lookingForAJob: boolean
		lookingForAJobDescription: string
		fullName: string,
		userId: number
		
}
const UserHeader = (props:PropsType) =>{
	const changeEditMode = () => {
		props.setEditMode(props.editMode);
	}
	let onSubmit=(file:ProfileType)=>{
		console.log(file)
		props.setFormThunk(file)
	}
	if(!props.profile){
		return <Preloader/>
	}
	return(
		<div className={s.header}>
		<UserAvatar avatar={props.profile.photos.large} isOwner={props.isOwner} savePhotoThunk={props.savePhotoThunk} editMode={props.editMode}/>
		{props.isOwner && !props.editMode ? <button type="button" className={s.editMode} onClick={changeEditMode}>edit</button> : ""}
		{props.isOwner && props.editMode ? <button type="button" className={s.editMode} onClick={changeEditMode}>edit mode exit</button> : ""}
		{props.editMode ? <FormEditUserInfo {...props} initialValues={props.profile} onSubmit={onSubmit}/> : <UserInfo {...props}/>}
	  </div>
	);
};
export default UserHeader;