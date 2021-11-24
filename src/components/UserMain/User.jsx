import UserHeader from "./UserHeader/UserHeader";
import UserPosts from "./UserPosts/UserPosts";
import s from "./User.module.css";
const User = () => {
  return (
    <div className={s.user}>
      <UserHeader />
      <div className={s.block}>
        <UserPosts />
      </div>
    </div>
  );
};

export default User;