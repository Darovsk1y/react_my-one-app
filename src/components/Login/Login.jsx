import s from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { FormControls } from "../global/FormControls/FormControls";
import { maxLengthCreator } from "../../utils/validators/validators";
import { required } from './../../utils/validators/validators';

const Input = FormControls("input");

let maxLength20 = maxLengthCreator(20);
const LoginForm = (props) =>{
	return <form className={s.form} onSubmit={props.handleSubmit}>
		<div className={s.line}>
			<Field component={Input} name={"email"} validate={[required, maxLength20]} placeholder="login" autoFocus={true}/>
		</div>
		<div className={s.line}>
			<Field component={Input} name={"password"} validate={[required, maxLength20]} placeholder="password" type="password"/>
		</div>
		<div className={s.line}>
			<label className={s.checkboxBlok}>
				<Field component={"input"} name={"rememberMe"} className={s.checkbox} type="checkbox"/>
				<span >запомнить меня</span>
			</label>
		</div>
		<button className={s.button}>Login</button>
	</form>
}
const LoginFormRedux = reduxForm({
	// a unique name for the form
  form: 'login'
})(LoginForm)
export default LoginFormRedux;