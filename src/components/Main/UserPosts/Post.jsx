import Like from "./Like";
import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.row}>
        <div className={s.avatar}>
          <a href="#/">
            <img src={props.avatar} alt=""></img>
          </a>
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
