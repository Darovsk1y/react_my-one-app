import s from "./Menu-nav.module.css";
import { NavLink } from "react-router-dom";
const setActive = (navLink) => navLink.isActive ? s.active : '';
const Menu = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <li className={s.li}>
          <NavLink to="/profile" className = {setActive}>Profile</NavLink>
        </li>
        <li className={s.li}>
          <NavLink to="/dialogs" className = {setActive}>Messages</NavLink>
        </li>
        <li className={s.li}>
          <NavLink to="/news" className = {setActive}>News</NavLink>
        </li>
        <li className={s.li}>
          <NavLink to="/music" className = {setActive}>Muzic</NavLink>
        </li>
        <li className={s.li}>
          <NavLink to="/settings" className = {setActive}>Settings</NavLink>
        </li>
        <li className={s.li + " "+ s.findusers}>
		{/* <a href="/users" className={s.findusers}>Find users</a> */}
          <NavLink to="/users" className = {setActive}>Find users</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
