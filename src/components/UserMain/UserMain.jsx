import MainImage from "./MainImage";
import s from "./UserMain.module.css";
/* import User from "./User"; */
import UserContainer from './UserContainer';

const UserMain = (props) => {
  return (
    <div className={s.main}>
      <MainImage />
      <div className={s.body}>
        <UserContainer />
      </div>
    </div>
  );
};

export default UserMain;
