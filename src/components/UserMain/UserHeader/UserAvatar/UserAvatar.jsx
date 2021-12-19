import s from "./UserAvatar.module.css";
const UserAvatar = (props) => {
  
  return (
    <a href="$/" className={s.avatar}>
      {props.avatar ? (
        <img src={props.avatar} alt="" />
      ) : (
        <img src="https://i0.wp.com/slovami.net/wp-content/uploads/2018/04/1-36-1024x1024.jpg" alt="" />
      )}
    </a>
  );
};
export default UserAvatar;
