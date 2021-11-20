import UserHeader from "./UserHeader";
import UserPosts from "./UserPosts";
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