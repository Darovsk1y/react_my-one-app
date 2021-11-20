import UserHeader from "./UserHeader";
import UserPosts from "./UserPosts";
import "./User.css";
const User = () => {
  return (
    <div className="main__user user-main">
      <UserHeader />
      <div className="user-main__block">
        <UserPosts />
      </div>
    </div>
  );
};

export default User;