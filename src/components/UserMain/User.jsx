import UserHeader from "./UserHeader/UserHeader";
import UserPosts from "./UserPosts/UserPosts";
import s from "./User.module.css";
const User = (props) => {
  return (
    <div className={s.user}>
      <UserHeader />
      <div className={s.block}>
        <UserPosts {...props}/>
      </div>
    </div>
  );
};

export default User;