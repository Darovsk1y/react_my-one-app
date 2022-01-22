import s from "./Login.module.css";
import LoginFormRedux from "./Login";
import React from "react";
import { connect } from 'react-redux';
import { authLoginThunk } from '../../redux/auth_reducer';
import { Navigate } from "react-router-dom";
import { AppStateType } from "../../redux/redux_store";
/* Используем устаревшую билиотеку Redux-form для практики */
/* type MatStateToPropsType={
	isAuth:boolean
	captchaUrl?:string|null
}
type MatDispatchToPropsType={
	authLoginThunk: (email:string,password:string,rememberMe:boolean,captcha:string)=>void
} */
//! как вынести эту логику?
/* type formDataType = {
	email:string
	password:string
	rememberMe:boolean
	captcha:string
} */
/* type Props = MatStateToPropsType & MatDispatchToPropsType */
class LoginContainer extends React.Component {
	//! formData что в ней
	onSubmit = (formData) => {
		if(this.props.isAuth === false){
			this.props.authLoginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha);
		}
	}
	/* Свойство "captchaUrl" не существует в типе
	 "IntrinsicAttributes & IntrinsicClassAttributes<FormInstance<{}, 
	 DecoratedFormProps<{}, {}, string>>> & Readonly<...> & Readonly<...>".ts(2322) */
  render() {
	if(this.props.isAuth) return <Navigate to={"/profile"}/>
    return (
      <div className="login">
        <h3 className={s.title}>Login</h3>
        <LoginFormRedux onSubmit={this.onSubmit} captchaUrl={this.props.captchaUrl}/>
      </div>
    );
  }
}
let mapStateProps = (state) => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl,
})
const LoginConnect = connect(mapStateProps, {authLoginThunk})(LoginContainer);

export default LoginConnect;
