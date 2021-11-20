import s from "./Menu-nav.module.css";
const Menu = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <li className={s.li}>
          <a href="#/">Users</a>
        </li>
        <li className={s.li}>
          <a href="#/">Messages</a>
        </li>
        <li className={s.li}>
          <a href="#/">News</a>
        </li>
        <li className={s.li}>
          <a href="#/">Muzic</a>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
