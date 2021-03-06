import MainImage from "./MainImage";
import s from "./Profile.module.css";
import UserContainer from './UserContainerFunc';

const Profile = () => {
  return (
    <div className={s.main}>
      <MainImage />
      <div className={s.body}>
        <UserContainer />
      </div>
    </div>
  );
};

export default Profile;
