import MainImage from "./MainImage";
import s from "./UserMain.module.css";
import User from "./User";

const UserMain = (props) => {
  return (
    <div className={s.main}>
      <MainImage />
      <div className={s.body}>
        <User store={props.store} />
      </div>
    </div>
  );
};

export default UserMain;
