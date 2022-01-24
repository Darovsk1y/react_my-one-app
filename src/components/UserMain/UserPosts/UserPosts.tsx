import PostsOld from "./PostsOld/PostsOld";
import s from "./UserPosts.module.css";
import FormPostRedux from './FormPost';
import { PostType } from "../../../types/types";

type PropsType = {
	posts:Array<PostType>
	newPostActionCreator:(text:string)=>void
}
export type FormPostValuesType = {
	textarea:string
}
const UserPosts = (props:PropsType) => {
	let onSubmit = (formData:FormPostValuesType) => {
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

export default UserPosts;