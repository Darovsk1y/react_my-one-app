/* import { useRef } from "react"; */
import PostsOld from "./PostsOld/PostsOld";
import s from "./UserPosts.module.css";
import React from 'react'; 
import { newPostActionCreator } from './../../../redux/state';
import { trackWritePostActionCreator } from './../../../redux/state';


const UserPosts = (props) => {
let textNewPost = React.createRef();

let createNewPost = () =>{
	props.dispatch(newPostActionCreator());
};
let trackChange = () =>{
	let text = textNewPost.current.value
	props.dispatch(trackWritePostActionCreator(text));
}

  return (
	<div className={s.posts}>
		My Posts
		<div className={s.new}>
			<form action="" className={s.form}>
				<textarea name="textarea" className={s.textarea} ref={textNewPost} value={props.data.newPostText} onChange={trackChange}></textarea>
				<button type="button" className={s.btn} onClick={createNewPost}>Send</button>
			</form>
		</div>
		<PostsOld data={props.data}/>
	</div>

  );
};
export default UserPosts;