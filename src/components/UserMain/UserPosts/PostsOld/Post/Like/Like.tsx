import s from "./Like.module.css";
type PropsType = {
	likes: number
}
const Like = (props:PropsType) => {
  return (
    <button type="button" className={s.like}>
      <span>{props.likes}</span>
      <div className={s.image}>
        <img src="https://pngicon.ru/file/uploads/like.png" alt=""></img>
      </div>
    </button>
  );
};
export default Like;
