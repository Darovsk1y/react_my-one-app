import React from 'react'; 
import { newPostActionCreator } from '../../../redux/profile_reducer';
import { trackWritePostActionCreator } from '../../../redux/profile_reducer';
import UserPosts from './UserPosts';

/* Теперь вся логика у нас тут */
const UserPostsContainer = (props) => {
let state = props.store.getState();

let addPost = () =>{
	props.store.dispatch(newPostActionCreator());
};
let trackChange = (text) =>{
	let action = trackWritePostActionCreator(text);
	props.store.dispatch(action);
}

  return (
	<UserPosts trackWritePost={trackChange}
	 createNewPost={addPost}
	  newPostText={state.profile.newPostText}
	  posts={state.profile.posts}
	  />
  );
};
export default UserPostsContainer;