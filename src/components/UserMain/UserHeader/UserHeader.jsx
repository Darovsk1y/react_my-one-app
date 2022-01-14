import UserAvatar from "./UserAvatar/UserAvatar";
import UserInfo from "./User-Info/UserInfo";
import s from "./UserHeader.module.css";
import { useState } from "react";
import FormEditUserInfo from './FormEditUserInfo/FormEditUserInfo';
const UserHeader = (props) =>{

	let [editMode, setEditMode] = useState(false);
	const changeEditMode = () => {
		setEditMode(!editMode);
	}
	let onSubmit=(formData)=>{
		console.log(formData)
		props.setFormThunk(formData).then(
			()=>{
				setEditMode(false);
			}
		);
	}
	return(
		<div className={s.header}>
		<UserAvatar avatar={props.profile.photos.large} isOwner={props.isOwner} savePhotoThunk={props.savePhotoThunk} editMode={editMode}/>
		{props.isOwner && !editMode ? <button type="button" className={s.editMode} onClick={changeEditMode}>edit</button> : ""}
		{props.isOwner && editMode ? <button type="button" className={s.editMode} onClick={changeEditMode}>edit mode exit</button> : ""}
		{editMode ? <FormEditUserInfo {...props} initialValues={props.profile} onSubmit={onSubmit}/> : <UserInfo {...props}/>}
	  </div>
	);
};
export default UserHeader;