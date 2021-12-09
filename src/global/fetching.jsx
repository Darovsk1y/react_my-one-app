import s from "./fetching.module.css";
import preloader from "../assets/Spin-1s-200px.svg";
let Fetching = (props) => {
  return (
    <div className={s.block}>
      <img className={s.fetching} src={preloader} alt="" />
    </div>
  );
};
export default Fetching;
