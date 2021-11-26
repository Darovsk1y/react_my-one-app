/* import { useRef } from "react"; */
import PostsOld from "./PostsOld/PostsOld";
import s from "./UserPosts.module.css";
import React from 'react'; 

const UserPosts = (props) => {

let textNewPost = React.createRef();
let createNewPost = () =>{
	let text = textNewPost.current.value;
	props.addPost(text);
	textNewPost.current.value= '';
};

  return (
	<div className={s.posts}>
		My Posts
		<div className={s.new}>
			<form action="" className={s.form}>
				<textarea name="textarea" className={s.textarea} placeholder="New post ..." ref={textNewPost}></textarea>
				<button type="button" className={s.btn} onClick={createNewPost}>Send</button>
			</form>
		</div>
		<PostsOld data={props.data}/>
	</div>
  );
};
export default UserPosts;