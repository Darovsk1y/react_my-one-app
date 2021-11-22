import s from "./Menu-nav.module.css";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <li className={s.li}>
          <NavLink to="/profile" className = { navLink => navLink.isActive ? s.active : '' }>Profile</NavLink>
        </li>
        <li className={s.li}>
          <NavLink to="/dialogs" className = { navLink => navLink.isActive ? s.active : '' }>Messages</NavLink>
        </li>
        <li className={s.li}>
          <NavLink to="/news" className = { navLink => navLink.isActive ? s.active : '' }>News</NavLink>
        </li>
        <li className={s.li}>
          <NavLink to="/music" className = { navLink => navLink.isActive ? s.active : '' }>Muzic</NavLink>
        </li>
        <li className={s.li}>
          <NavLink to="/settings" className = { navLink => navLink.isActive ? s.active : '' }>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
