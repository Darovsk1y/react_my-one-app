import { ChangeEvent } from "react";
import s from "./UserAvatar.module.css";
type PropsType = {
	avatar: string | null
	editMode: boolean
	isOwner: boolean
	savePhotoThunk: (file:File)=>void
}
const UserAvatar:React.FC<PropsType> = (props) => {
	const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) =>{
		/* const target = e.target as HTMLInputElement; */
		if(e.target.files?.length){
			props.savePhotoThunk(e.target.files[0]);
		}
	/* 	if(e.target.files.length){
			props.savePhotoThunk(e.target.files[0]);
		} */
	}
  return (<div className={s.avatarBlock}>
			<a href="$/" className={s.avatar}>
				{props.avatar ? (
					<img src={props.avatar} alt="" />
				) : (
					<div className="">
						<img src="https://i0.wp.com/slovami.net/wp-content/uploads/2018/04/1-36-1024x1024.jpg" alt="" />
					</div>
				)}
			</a>
			
			{/* Если режим редактирования выводим кнопку смены аватара */}
			{props.isOwner && props.editMode ? <input type="file" className={s.loadAvatar} placeholder="file" onChange={onPhotoSelected}/> : ""}
 		</div>
  );
};
export default UserAvatar;
