import Post from "./Post";
import s from "./PostsOld.module.css";
const PostsOld = () => {
  return (
	<div className={s.posts}>
	<Post/>
	</div>
  );
};
export default PostsOld;