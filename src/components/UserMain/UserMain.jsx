
import MainImage from "./MainImage";
import s from "./UserMain.module.css";
import User from "./User";

const UserMain = (props) => {
  return (
    <div className={s.main}>
	<MainImage/>
      <div className={s.body}>
		<User {...props}/>
      </div>
    </div>
  );
};

export default UserMain;