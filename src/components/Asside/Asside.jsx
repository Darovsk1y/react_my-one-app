import Menu from "./Menu/Menu-nav";
import s from "./Asside.module.css";
import FriendsContainer from './Friends/FriendsContainer';

const Asside = (props) => {

  return (
    <div className={s.asside}>
      <Menu />
	  <a href="/users" className={s.findusers}>Find users</a>
	  <FriendsContainer />
    </div>
  );
};
export default Asside;
