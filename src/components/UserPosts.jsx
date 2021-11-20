import s from "./UserPosts.module.css";
const UserPosts = () => {
  return (
	<div className={s.posts}>
		My Posts
		<div className={s.write}>
			<form action="" className={s.form}>
				<textarea name="textarea" className={s.textarea}></textarea>
				<button type="submit" className={s.btn}>Send</button>
			</form>
		</div>
		<div className={s.old}>My old Post
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus reprehenderit saepe consectetur, ipsam totam reiciendis sapiente consequatur. Corrupti illum, nam dicta quidem, dolores aliquid, repellendus qui saepe deserunt est reprehenderit?</div>
	</div>
  );
};
export default UserPosts;