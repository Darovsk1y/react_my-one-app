import s from "./Login.module.css";
import f from "../global/FormControls/FormControls.module.css";
import { Field, reduxForm, SubmitHandler } from "redux-form";
import { FormControls } from "../global/FormControls/FormControls";
import { maxLengthCreator } from "../../utils/validators/validators";
import { required } from '../../utils/validators/validators';

const Input = FormControls("input");

let maxLength30 = maxLengthCreator(30);
type Props = {
	handleSubmit:SubmitHandler<{}, {}, string>
	captchaUrl?:string | null
	error?:string | null
}
//! мы не знаем что на выходе?
const LoginForm = (props:Props) =>{
	return <form className={s.form} onSubmit={props.handleSubmit}>
		<div className={s.line}>
			<Field component={Input} name={"email"} validate={[required, maxLength30]} placeholder="login" autoFocus={true}/>
		</div>
		<div className={s.line}>
			<Field component={Input} name={"password"} validate={[required, maxLength30]} placeholder="password" type="password"/>
		</div>
		<div className={s.line}>
			<label className={s.checkboxBlok}>
				<Field component={"input"} name={"rememberMe"} className={s.checkbox} type="checkbox"/>
				<span >запомнить меня</span>
			</label>
		</div>
		{/* Хитрый способ задания условия через && */}
		{props.captchaUrl && <img src={props.captchaUrl} alt="captcha" className={s.captcha}/>}
		{props.captchaUrl && <div className={s.line +" "+s.captchaInput}>
			<Field component={Input} name={"captcha"} type="text" autoFocus={true} validate={[required]}/>
		</div>
		}

		{props.error ? 
		<div>
			<div className={f.formError}>
				{props.error}
			</div>
		</div>
		 : ""
		}
		
		<button className={s.button}>Login</button>
	</form>
}
const LoginFormRedux = reduxForm({
	// a unique name for the form
  form: 'login'
})(LoginForm)
export default LoginFormRedux;