import s from "./UserPosts.module.css";
import { Field, InjectedFormProps } from "redux-form";
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { FormControls } from '../../global/FormControls/FormControls';
import { FormPostValuesType } from "./UserPosts";
import { reduxForm } from "redux-form";
type OwnPropsType = {
	
}
const Textarea = FormControls("textarea");

let maxLength10 = maxLengthCreator(10);
const FormPost:React.FC<InjectedFormProps<FormPostValuesType, OwnPropsType> & OwnPropsType> = (props) => {
	
  return (
	<form className={s.form} onSubmit={props.handleSubmit}>
		<Field component={Textarea} name="textarea" className={s.textarea} 
		validate={[required, maxLength10]} placeholder="add message"></Field>
		<button className={s.btn}>Send</button>
	</form>
  );
};
const FormPostRedux = reduxForm<FormPostValuesType, OwnPropsType>({form: 'post'})(FormPost)
export default FormPostRedux;