import s from "./Login.module.css";
import LoginFormRedux, { LoginFormDataValuesType } from "./Login";
import { useDispatch, useSelector } from 'react-redux';
import { authLoginThunk } from '../../redux/auth_reducer';
import { Navigate } from "react-router-dom";
import { AppStateType } from "../../redux/redux_store";

const LoginContainer: React.FC = () =>{
	//теперь получаем данные через хуки
	//пример невынесенного селектора, так делать нежелательно
	const captchaUrl = useSelector((state:AppStateType)=> state.auth.captchaUrl);
	const isAuth = useSelector((state:AppStateType)=> state.auth.isAuth);
	const dispatch = useDispatch();

	const onSubmit = (formData:LoginFormDataValuesType) => {
		if(isAuth === false){
			//todo если раньше простовызывали то сейчас Диспатчим эту санку
			dispatch(authLoginThunk(formData.email, formData.password, 
				formData.rememberMe, formData.captcha))
		}
	}
	if(isAuth) return <Navigate to={"/profile"}/>
    return (
      <div className="login">
        <h3 className={s.title}>Login</h3>
        <LoginFormRedux onSubmit={onSubmit} captchaUrl={captchaUrl}/>
      </div>
    )
}

export default LoginContainer;
