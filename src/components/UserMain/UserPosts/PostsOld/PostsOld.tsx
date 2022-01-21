import { PostType } from "../../../../types/types";
import Post from "./Post/Post";
import s from "./PostsOld.module.css";
type PropsType = {
	posts:Array<PostType>
}
const PostsOld = (props:PropsType) => {
/* Далее мы преобразовали в элементы массива */
let postElements = props.posts.map((dialog) => {
	return (
	  <Post
		key={dialog.id}
		likes={dialog.likes}
		name={dialog.name}
		avatar={dialog.avatar}
		text={dialog.text}
		link={dialog.link}
	  />
	);
  });

  return (<div className={s.posts}>{postElements}</div>);
};
export default PostsOld;
