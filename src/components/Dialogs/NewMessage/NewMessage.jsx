import s from "./NewMessage.module.css";
import  React  from 'react';
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from './../../../utils/validators/validators';
import { Textarea } from '../../global/FormControls/FormControls';

let maxLength100 = maxLengthCreator(100);
const NewMessage = (props) => {

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
