import s from "./NewMessage.module.css";
import  React  from 'react';
import { Field, reduxForm, SubmitHandler } from "redux-form";
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { FormControls } from '../../global/FormControls/FormControls';

const Textarea = FormControls("textarea");
let maxLength100 = maxLengthCreator(100);
type Props = {
	handleSubmit:SubmitHandler<{}, {}, string>
}
const NewMessage = (props:Props) => {

  return (
    <form action="" className={s.newmessage} onSubmit={props.handleSubmit}>
      <Field
	  component={Textarea}
        name="message"
        className={s.textarea}
		placeholder="new message"
		validate={[required, maxLength100]}
      ></Field>
      <button className={s.btn}>
        Send
      </button>
    </form>
  );
};
const LoginFormRedux = reduxForm({
	// a unique name for the form
  form: 'message'
})(NewMessage)
export default LoginFormRedux;
