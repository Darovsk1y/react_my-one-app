import PostsOld from "./PostsOld/PostsOld";
import s from "./UserPosts.module.css";
import FormPost from './FormPost';
import { reduxForm } from "redux-form";
import { PostType } from "../../../types/types";
type PropsType = {
	posts:Array<PostType>
	newPostActionCreator:(text:string)=>void
}
//! formData я не знаю что туда поступает
const UserPosts = (props:PropsType) => {
	let onSubmit = (formData:any) => {
		props.newPostActionCreator(formData.textarea);
		formData.textarea = ""; 
		/* возможно из за такого способа валидация не видит пустоты */
	}
  return (
	<div className={s.posts}>
		My Posts
		<div className={s.new}>
			<FormPostRedux {...props} onSubmit={onSubmit}/>
		</div>
		<PostsOld posts={props.posts}/>
	</div>
  );
};
const FormPostRedux = reduxForm({form: 'post'})(FormPost)
export default UserPosts;