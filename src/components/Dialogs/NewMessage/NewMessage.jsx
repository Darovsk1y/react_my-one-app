import s from "./NewMessage.module.css";
import  React  from 'react';
import { Field, reduxForm } from "redux-form";

const NewMessage = (props) => {

  return (
    <form action="" className={s.newmessage} onSubmit={props.handleSubmit}>
      <Field
	  component={"textarea"}
        name="message"
        className={s.textarea}
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
