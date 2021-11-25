import s from "./Friend.module.css";

const Friend = (props) => {
  return (
    <li className={s.friend}>
      <a href="#/" className={s.item}>
        <div className={s.image}>
          <img
            src={props.image}
            alt=""
          ></img>
        </div>
        <div className={s.name}>{props.name}</div>
      </a>
    </li>
  );
};
export default Friend;
