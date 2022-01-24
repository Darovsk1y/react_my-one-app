import s from "./Login.module.css";
import LoginFormRedux from "./Login";
import { connect } from 'react-redux';
import { authLoginThunk } from '../../redux/auth_reducer';
import { Navigate } from "react-router-dom";
import { AppStateType } from "../../redux/redux_store";

// todo Что должно быть в Форме
export type LoginFormDataValuesType = { 
	email:string
	password:string
	rememberMe:boolean
	//тут captcha прошла проверку и не может быть null
	captcha:string
}
//todo Там можно задать типы MapStatePropsType & MapDispatchToPropsType
const LoginContainer: React.FC<MapStatePropsType & MapDispatchToPropsType> = (props) =>{
//что пришло из формы
	
	const onSubmit = (formData:LoginFormDataValuesType) => {
		if(props.isAuth === false){
			props.authLoginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha);
		}
	}

	if(props.isAuth) return <Navigate to={"/profile"}/>
    return (
      <div className="login">
        <h3 className={s.title}>Login</h3>
        <LoginFormRedux onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
      </div>
    )
}
//todo Описание типив
type MapStatePropsType = {
	isAuth: boolean
	captchaUrl: string | null
}
type MapDispatchToPropsType = {
	authLoginThunk: (email:string, password:string, rememberMe:boolean, captcha:string)=>void
}
type OwnPropsType={}
//todo Описали и на входе и на выходе
let mapStateProps = (state:AppStateType): MapStatePropsType => ({
	isAuth: state.auth.isAuth,
	captchaUrl: state.auth.captchaUrl,
})
const LoginConnect = connect<MapStatePropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateProps, {authLoginThunk})(LoginContainer);

export default LoginConnect;
