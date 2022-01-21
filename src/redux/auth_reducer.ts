import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../api/api';
import { ProfileType } from '../types/types';
const SET_USER_DATA = "react_my-one-app/auth/SET_USER_DATA";
const SET_AUTH_USER_PROFILE = "react_my-one-app/auth/SET_AUTH_USER_PROFILE";
const GET_CAPTCHA_URL_SUCCESS = "react_my-one-app/auth/GET_CAPTCHA_URL_SUCCESS";
//пока что капчу мы рассмотрим только для случая логинизации

type intialStateType = {
	id: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean | false,
	activeUser: ProfileType | null,
	captchaUrl: string | null,
}
let intialState:intialStateType = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	activeUser: null,
	captchaUrl: null,//если пришла капча выведем её в UI
}
//! В этом редюсоре тайпскрипт работает некорректно Как и у Димыча 4ур 46мин
const authReduser = (state = intialState, action:any):intialStateType => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state, ...action.data,
			}
		}
		case GET_CAPTCHA_URL_SUCCESS: {
			return {
				...state, ...action.data,
			}
		}
		case SET_AUTH_USER_PROFILE: {
			return {
				...state, ...action.data,
			}
		}
		default:
			return state;
	}
}
type setAuthUserDataDataType = {
	id:number | null
	email:string | null
	login:string | null
	isAuth:boolean
}
type setAuthUserDataACType = {
	type: typeof SET_USER_DATA,
	data: setAuthUserDataDataType,
}
export const setAuthUserData = (id:number | null, email:string | null, login:string | null, isAuth:boolean):setAuthUserDataACType => {
	return {
		type: SET_USER_DATA,
		data: {id, email, login, isAuth},
	}
}
export const setAuthUserProfile = (activeUser:any) => {
	return {
		type: SET_AUTH_USER_PROFILE,
		data: {activeUser},
	}
}
type getCaptchaUrlSuccsessACType = {
	type: typeof GET_CAPTCHA_URL_SUCCESS,
	data: {captchaUrl:string}
}
export const getCaptchaUrlSuccsess = (captchaUrl:string):getCaptchaUrlSuccsessACType => {
	return {
		type: GET_CAPTCHA_URL_SUCCESS,
		data: {captchaUrl},
	}
}
/* Thinks */
export const authMeThunk = () => {
	return async (dispatch:any) => {
		let response = await authAPI.authMeApi();
	
			if(response.resultCode === 0){
				//!let {id, email, login} = {...response.data}
				let {id, email, login} = response.data
				dispatch(setAuthUserData(id, email, login, true));
				let responseProfile = await authAPI.authMeGetProfileApi(response.data.id);
				if(responseProfile) {
					dispatch(setAuthUserProfile(responseProfile));
					//? Тут мы получиши профайл пользователя
				}
			}
	}
}
/* Авторизация на нашем сайте */
export const authLoginThunk = (email:string, password:string, rememberMe:boolean, captcha:string) => {
	return async (dispatch:any) => {
		let response = await authAPI.autchMeLoginApi(email, password, rememberMe, captcha);
			if(response.resultCode === 0){ /* Если я залогинен то запустить Санку Авторизации моих данных */
				dispatch(authMeThunk());
			} else {
				/* dispatch(getCaptchaUrlThunk()); */
				if (response.resultCode === 10){/* когда будет капча */
					dispatch(getCaptchaUrlThunk());
				} 
				let message = response.messages.length > 0 ?  response.messages[0] : "Some error";
				dispatch(stopSubmit("login", {_error: message}));
			}
	}
}
export const LogoutThunk = () => {
	return async (dispatch:any) => {
		let response = await authAPI.LogoutApi();
			if(response.data.resultCode === 0){
				dispatch(setAuthUserData(null, null, null, false));
			}
	}
}
/* Captcha */
export const getCaptchaUrlThunk = () => async (dispatch:any) =>{
	const responce = await securityAPI.getCaptchaUrl();
	//вернется по любому. см.докум на сервере. проверка не нужна
	const captchaUrl = responce.data.url;
	dispatch(getCaptchaUrlSuccsess(captchaUrl));
}


export default authReduser;