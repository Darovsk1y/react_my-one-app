import { FormAction, stopSubmit } from 'redux-form';
import { ResultCodeEnum, ResultCodeForCaptcha } from '../api/api';
import { securityAPI } from "../api/securityAPI";
import { authAPI } from "../api/authAPI";
import { ProfileType } from '../types/types';
import { BaseThunkType, InferActionsType } from './redux_store';
//пока что капчу мы рассмотрим только для случая логинизации

let intialState = {
	id: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false,
	activeUser: null as ProfileType | null,
	captchaUrl: null as string | null, //если пришла капча выведем её в UI
}
type intialStateType = typeof intialState
type ActionType = InferActionsType<typeof actions>

const authReduser = (state = intialState, action:ActionType):intialStateType => {
	switch (action.type) {
		case 'react_my-one-app/auth/SET_USER_DATA': {
			return {
				...state, ...action.data,
			}
		}
		case 'react_my-one-app/auth/GET_CAPTCHA_URL_SUCCESS': {
			return {
				...state, ...action.data,
			}
		}
		case 'react_my-one-app/auth/SET_AUTH_USER_PROFILE': {
			return {
				...state, ...action.data,
			}
		}
		default:
			return state;
	}
}
const actions = {
	setAuthUserData: (id:number | null, email:string | null, login:string | null, isAuth:boolean) => {
		return {
			type: 'react_my-one-app/auth/SET_USER_DATA',
			data: {id, email, login, isAuth},
		} as const
	},
	setAuthUserProfile: (activeUser:ProfileType) => {
		return {
			type: 'react_my-one-app/auth/SET_AUTH_USER_PROFILE',
			data: {activeUser},
		} as const
	},
	getCaptchaUrlSuccsess: (captchaUrl:string) => {
		return {
			type: 'react_my-one-app/auth/GET_CAPTCHA_URL_SUCCESS',
			data: {captchaUrl},
		} as const
	}
}


/* Thinks */
//todo FormAction нужен для добавления stopSubmit НО теперь мы теряем контроль над вводом
type ThunkType = BaseThunkType<ActionType | FormAction>

export const authMeThunk = ():ThunkType => {
	return async (dispatch) => {
		let response = await authAPI.authMeApi();
			if(response.resultCode === ResultCodeEnum.Success){
				let {id, email, login} = response.data
				dispatch(actions.setAuthUserData(id, email, login, true));
				let responseProfile = await authAPI.authMeGetProfileApi(response.data.id);
				if(responseProfile) {
					dispatch(actions.setAuthUserProfile(responseProfile));
					//? Тут мы получиши профайл пользователя
				}
			}
	}
}
/* Авторизация на нашем сайте */
export const authLoginThunk = (email:string, password:string, rememberMe:boolean, captcha:string):ThunkType => {

	return async (dispatch) => {
		let response = await authAPI.autchMeLoginApi(email, password, rememberMe, captcha);
			if(response.resultCode === ResultCodeEnum.Success){ /* Если я залогинен то запустить Санку Авторизации моих данных */
				dispatch(authMeThunk()); 
			} else {
				/* dispatch(getCaptchaUrlThunk()); */
				if (response.resultCode === ResultCodeForCaptcha.CapchaError){/* когда будет капча */
					dispatch(getCaptchaUrlThunk());
				} 
				let message = response.messages.length > 0 ?  response.messages[0] : "Some error";
				dispatch(stopSubmit("login", {_error: message}));
			}
	}
}
export const LogoutThunk = ():ThunkType => {
	return async (dispatch) => {
		let response = await authAPI.LogoutApi();
			if(response.data.resultCode === ResultCodeEnum.Success){
				dispatch(actions.setAuthUserData(null, null, null, false));
			}
	}
}
/* Captcha */
export const getCaptchaUrlThunk = ():ThunkType => async (dispatch) =>{
	const responce = await securityAPI.getCaptchaUrl();
	//вернется по любому. см.докум на сервере. проверка не нужна
	const captchaUrl = responce.data.url;
	dispatch(actions.getCaptchaUrlSuccsess(captchaUrl));
}


export default authReduser;