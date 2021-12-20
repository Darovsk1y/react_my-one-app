import s from "./UserPosts.module.css";
import { Field } from "redux-form";

const FormPost = (props) => {

  return (
	<form className={s.form} onSubmit={props.handleSubmit}>
		<Field component={"textarea"} name="textarea" className={s.textarea} ></Field>
		<button className={s.btn}>Send</button>
	</form>
  );
};
export default FormPost;