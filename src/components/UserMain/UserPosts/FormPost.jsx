import s from "./UserPosts.module.css";
import { Field } from "redux-form";
import { required, maxLengthCreator } from './../../../utils/validators/validators';
import { FormControls } from '../../global/FormControls/FormControls';

const Textarea = FormControls("textarea");

let maxLength10 = maxLengthCreator(10);
const FormPost = (props) => {
	
  return (
	<form className={s.form} onSubmit={props.handleSubmit}>
		<Field component={Textarea} name="textarea" className={s.textarea} 
		validate={[required, maxLength10]} placeholder="add message"></Field>
		<button className={s.btn}>Send</button>
	</form>
  );
};
export default FormPost;