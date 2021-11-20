import PostsOld from "./PostsOld";
import s from "./UserPosts.module.css";
const UserPosts = () => {
  return (
	<div className={s.posts}>
		My Posts
		<div className={s.new}>
			<form action="" className={s.form}>
				<textarea name="textarea" className={s.textarea}></textarea>
				<button type="submit" className={s.btn}>Send</button>
			</form>
		</div>
		<PostsOld/>
	</div>
  );
};
export default UserPosts;