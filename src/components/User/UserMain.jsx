
import MainImage from "./MainImage";
import s from "./UserMain.module.css";
import User from "./User";

const UserMain = () => {
  return (
    <div className={s.main}>
	<MainImage/>
      <div className={s.body}>
		<User/>
      </div>
    </div>
  );
};
export default UserMain;