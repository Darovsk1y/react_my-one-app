import PostsOld from "./PostsOld/PostsOld";
import s from "./UserPosts.module.css";
import FormPost from './FormPost';
import { reduxForm } from "redux-form";

const UserPosts = (props) => {
	
	let onSubmit = (formData) => {
		console.log(formData);

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