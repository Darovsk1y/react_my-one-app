import UserHeader from "./UserHeader/UserHeader";
/* import UserPosts from "./UserPosts/UserPosts"; */
import s from "./User.module.css";
import UserPostsContainer from './UserPosts/UserPostsContainer';
import Preloader from './../global/Preloader/preloader';

const User = (props) => {
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
  );
};

export default User;