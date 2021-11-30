/* import { useRef } from "react"; */
import PostsOld from "./PostsOld/PostsOld";
import s from "./UserPosts.module.css";
import React from 'react'; 

const UserPosts = (props) => {
let textNewPost = React.createRef();
/* Теперь у нас тут только ф-ии пришедшие через пропсы, т.е. кулбеки, логику отсюда убрали */
let addPost = () =>{
	props.createNewPost();
};
let trackChange = () =>{
	let text = textNewPost.current.value
	props.trackWritePost(text);
}

  return (
	<div className={s.posts}>
		My Posts
		<div className={s.new}>
			<form action="" className={s.form}>
				<textarea name="textarea" className={s.textarea} ref={textNewPost} value={props.data.newPostText} onChange={trackChange}></textarea>
				<button type="button" className={s.btn} onClick={addPost}>Send</button>
			</form>
		</div>
		<PostsOld data={props.data.posts}/>
	</div>

  );
};
export default UserPosts;