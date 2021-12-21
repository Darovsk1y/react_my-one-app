import { authAPI } from './../api/api';
const SET_USER_DATA = "SET_USER_DATA";
const SET_AUTH_USER_PROFILE = "SET_AUTH_USER_PROFILE";

let intialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	activeUser: null,
}

const authReduser = (state = intialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state, ...action.data,
			}
		}
		case SET_AUTH_USER_PROFILE: {
			return {
				...state,
				activeUser: action.activeUser,
			}
		}

		default:
			return state;
	}
}

export const setAuthUserData = (id, email, login, isAuth) => {
	return {
		type: SET_USER_DATA,
		data: {id, email, login, isAuth},
	}
}
export const setAuthUserProfile = (activeUser) => {
	return {
		type: SET_AUTH_USER_PROFILE,
		activeUser,
	}
}

/* Thinks */
export const authMeThunk = () => {
	return (dispatch) => {
		authAPI.authMeApi()
		.then(data =>{
			if(data.resultCode === 0){
				let {id, email, login} = {...data.data}
				dispatch(setAuthUserData(id, email, login, true));
				authAPI.authMeGetProfileApi(data.data.id)
				.then(data => {
					dispatch(setAuthUserProfile(data));
				})
			}
		})
	}
}
/* Авторизация на нашем сайте */
export const authLoginThunk = (email, password, rememberMe) => {
	return (dispatch) => {
		authAPI.autchMeLoginApi(email, password, rememberMe)
		.then(data =>{
			if(data.resultCode === 0){ /* Если я залогинен то запустить Санку Авторизации моих данных */
				dispatch(authMeThunk());
			}
		})
	}
}
export const LogoutThunk = () => {
	return (dispatch) => {
		authAPI.LogoutApi()
		.then(response =>{
			if(response.data.resultCode === 0){
				dispatch(setAuthUserData(null, null, null, false));
			}
		})
	
	}
}

export default authReduser;