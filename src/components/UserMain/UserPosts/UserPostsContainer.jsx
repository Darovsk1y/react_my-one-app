import React from 'react'; 
import { newPostActionCreator } from '../../../redux/profile_reducer';
import { trackWritePostActionCreator } from '../../../redux/profile_reducer';
import UserPosts from './UserPosts';

/* Теперь вся логика у нас тут */
const UserPostsContainer = (props) => {
let addPost = () =>{
	props.dispatch(newPostActionCreator());
};
let trackChange = (text) =>{
	let action = trackWritePostActionCreator(text);
	props.dispatch(action);
}

  return (
	<UserPosts trackWritePost={trackChange} createNewPost={addPost} data={props.data}/>
  );
};
export default UserPostsContainer;