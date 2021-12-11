import s from "./UserAvatar.module.css";
const UserAvatar = (props) => {
  /* src="https://scontent.fdnk5-1.fna.fbcdn.net/v/t1.6435-9/71788193_525812181517269_1225717343393415168_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Sk5ngR6CQa4AX-YK48H&tn=cowQwI4GI2N4ygpU&_nc_ht=scontent.fdnk5-1.fna&oh=1c6d0f524bfa3b80e7e77a8ab7c5b805&oe=61BCB1BD" */
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
