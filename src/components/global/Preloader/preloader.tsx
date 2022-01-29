import s from "./preloader.module.css";
import preloader from "../../../assets/Spin-1s-200px.svg";
let Preloader = () => {
  return (
    <div className={s.block}>
      <img className={s.fetching} src={preloader} alt="" />
    </div>
  );
};
export default Preloader;
