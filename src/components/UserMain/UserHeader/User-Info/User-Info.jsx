import s from "./User-Info.module.css";
const UserInfo = () => {
  return (
    <div className={s.info}>
      <div className={s.line}>
        <div className={s.param}>name</div>
        <div className={s.answer}>Aleksandr Klimovich</div>
      </div>
      <div className={s.line}>
        <div className={s.param}>city</div>
        <div className={s.answer}>Energodar</div>
      </div>
      <div className={s.line}>
        <div className={s.param}>logon</div>
        <div className={s.answer}>x5</div>
      </div>
      <div className={s.line}>
        <div className={s.param}>favorit class</div>
        <div className={s.answer}>Druid</div>
      </div>
    </div>
  );
};
export default UserInfo;