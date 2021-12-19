import React from 'react'; 
import s from "./UserPosts.module.css";
import { Field } from "redux-form";

const FormPost = (props) => {
	let textNewPost = React.createRef();
/* Теперь у нас тут только ф-ии пришедшие через пропсы, т.е. кулбеки, логику отсюда убрали */
/* let addPost = () =>{
	props.createNewPost();
}; */
let trackChange = () =>{
	let text = textNewPost.current.value
	props.trackWritePost(text);
}
  return (
	<form className={s.form} onSubmit={props.handleSubmit}>
		<Field component={"textarea"} name="textarea" className={s.textarea} ></Field>
		<button className={s.btn}>Send</button>
	</form>
  );
};
export default FormPost;