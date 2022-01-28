import UserHeader from "./UserHeader/UserHeader";
import s from "./User.module.css";
import UserPostsContainer from './UserPosts/UserPostsContainer';
import Preloader from '../global/Preloader/preloader';
import { ProfileType } from "../../types/types";
type Props = {
	profile: ProfileType | null
	updateStatusThusk:(st:string)=>void
	status:string
	isOwner:boolean
	savePhotoThunk:(file: File)=>void
	setFormThunk:(file: ProfileType)=>void
	setEditMode: (editMode: boolean)=>void
	editMode:boolean
}
const User:React.FC<Props> = (props) => {
	/* пока не пришли данные но уже идет рендер делай заставку */
	if(!props.profile){
		return <Preloader/>
	}
	return (
		<div className={s.user}>
		<UserHeader {...props}/>
		<div className={s.block}>
			<UserPostsContainer />
		</div>
		</div>
	)
};

export default User;