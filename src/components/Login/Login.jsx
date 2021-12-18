import { Field, reduxForm } from "redux-form";
import s from "./Login.module.css";
/* Используем устаревшую билиотеку Redux-form для практики */

const Login = (props) => {
const onSubmit = (formData) =>{
	console.log(formData);
}

	return (
		<div className="login">
			<h3 className={s.title}>Login</h3>
			<LoginFormRedux onSubmit={onSubmit}/>
		</div>
	)
}
const LoginForm = (props) =>{
	return <form className={s.form} onSubmit={props.handleSubmit}>
		<div className={s.line}>
			<Field component={"input"} name={"login"} placeholder="login" autoFocus={true}/>
		</div>
		<div className={s.line}>
			<Field component={"input"} name={"password"} placeholder="password"/>
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
export default Login;