import s from "./Login.module.css";
import LoginFormRedux from "./Login";
import React from "react";
import { connect } from 'react-redux';
import { authLoginThunk } from './../../redux/auth_reducer';
import { Navigate } from "react-router-dom";
/* Используем устаревшую билиотеку Redux-form для практики */

class LoginContainer extends React.Component {
	onSubmit = (formData) => {
		if(this.props.isAuth === false){
			this.props.authLoginThunk(formData.email, formData.password, formData.rememberMe);
		}
	}
	
  render() {
	if(this.props.isAuth) return <Navigate to={"/profile"}/>
    return (
      <div className="login">
        <h3 className={s.title}>Login</h3>
        <LoginFormRedux onSubmit={this.onSubmit} />
      </div>
    );
  }
}
let mapDispathToProps = (state) => ({
	isAuth: state.auth.isAuth,
})
const LoginConnect = connect(mapDispathToProps, {authLoginThunk})(LoginContainer);

export default LoginConnect;
