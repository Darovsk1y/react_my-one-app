import s from "./Menu-nav.module.css";
const Menu = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <li className={s.li}>
          <a href="/profile">Profile</a>
        </li>
        <li className={s.li}>
          <a href="/dialogs">Messages</a>
        </li>
        <li className={s.li}>
          <a href="/news">News</a>
        </li>
        <li className={s.li}>
          <a href="/music">Muzic</a>
        </li>
        <li className={s.li}>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
