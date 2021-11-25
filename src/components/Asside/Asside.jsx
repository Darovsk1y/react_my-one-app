import Menu from "./Menu/Menu-nav";
import s from "./Asside.module.css";
import Friends from "./Friends/Friends";

const Asside = (props) => {
  return (
    <div className={s.asside}>
      <Menu />
	  <Friends data={props.data.friends}/>
    </div>
  );
};
export default Asside;
