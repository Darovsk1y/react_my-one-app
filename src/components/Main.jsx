import UserInfo from "./User-Info";
import MainImage from "./MainImage";
import UserLogo from "./UserLogo";
import UserPosts from "./UserPosts";

const Main = () => {
  return (
    <main className="main">
	<MainImage/>
      <div className="main__body">
        <div className="main__user user-main">
          <div className="user-main__header">
            <UserLogo/>
        	<UserInfo/>
          </div>
          <div className="user-main__block">
           <UserPosts/>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;