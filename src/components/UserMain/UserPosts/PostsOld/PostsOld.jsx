import Post from "./Post/Post";
import s from "./PostsOld.module.css";

const PostsOld = (props) => {
/* Далее мы преобразовали в элементы массива */
let postElements = props.posts.map((dialog) => {
	return (
	  <Post
		key={dialog.id}
		likes={dialog.likes}
		name={dialog.name}
		avatar={dialog.avatar}
		text={dialog.text}
	  />
	);
  });

  return (<div className={s.posts}>{postElements}</div>);
};
export default PostsOld;
