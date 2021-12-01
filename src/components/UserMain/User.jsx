import UserHeader from "./UserHeader/UserHeader";
/* import UserPosts from "./UserPosts/UserPosts"; */
import s from "./User.module.css";
import UserPostsContainer from './UserPosts/UserPostsContainer';
const User = (props) => {
  return (
    <div className={s.user}>
      <UserHeader />
      <div className={s.block}>
        <UserPostsContainer store={props.store}/>
      </div>
    </div>
  );
};

export default User;