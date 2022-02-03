import { AppStateType } from "../redux_store";

export const getAuthLogin = (state:AppStateType) =>{
	return state.auth.login
}
export const getAuthIsAuth = (state:AppStateType) =>{
	return state.auth.isAuth
}
export const getAuthActiveUser = (state:AppStateType) =>{
	return state.auth.activeUser
}