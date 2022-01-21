import Like from "./Like/Like";
import s from "./Post.module.css";
import { NavLink } from "react-router-dom";
type PropsType = {
	key:number
	likes:number
	name:string
	avatar:string
	text:string
	link:string
}
const Post = (props:PropsType) => {
  return (
    <div className={s.post}>
      <div className={s.row}>
        <div className={s.avatar}>
          <NavLink to={props.link}>
            <img src={props.avatar} alt=""></img>
          </NavLink>
        </div>
        <div className={s.block}>
          <div className={s.name}>{props.name}</div>
          <div className={s.text}>{props.text}</div>
        </div>
      </div>
		<Like
		likes={props.likes}/>
    </div>
  );
};
export default Post;
