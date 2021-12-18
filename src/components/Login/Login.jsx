import s from "./Login.module.css";
const Login = (props) => {
	return (
		<div className="login">
			<h3 className={s.title}>Регистрация</h3>
			<LoginForm/>
		</div>
	)
}
const LoginForm = (props) =>{
	return <form className={s.form}>
		<div className={s.line}>
			<input placeholder="login" autoFocus={true}/>
		</div>
		<div className={s.line}>
			<input placeholder="password"/>
		</div>
		<div className={s.line}>
			<label className={s.checkboxBlok}>
				<input className={s.checkbox} type="checkbox" checked/>
				<span >запомнить меня</span>
			</label>
		</div>
		<button className={s.button}>Login</button>
	</form>
}
export default Login;