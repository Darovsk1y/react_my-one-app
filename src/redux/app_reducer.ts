
import { ThunkAction } from 'redux-thunk';
import { authMeThunk } from './auth_reducer';
import { AppStateType } from './redux_store';
const INITIALIZE_APP = "react_my-one-app/app/INITIALIZE_APP";
const SAVED_GLOGAL_ERROR = "react_my-one-app/app/SAVED_GLOGAL_ERROR";
const CLEAR_GLOGAL_ERROR = "react_my-one-app/app/CLEAR_GLOGAL_ERROR";

type intialStateType = {
	initialized: boolean
	globalError: string | null
}
let intialState:intialStateType = {
	initialized: false,
	globalError: null,
}
type ActionType = initializeAppACType|savedGlobalErrorACType|clearGlobalErrorACType
const appReducer = (state = intialState, action:ActionType):intialStateType => {
	switch (action.type){
		case INITIALIZE_APP: {
			return {
				...state,
				initialized: true,
			}
		}
		case SAVED_GLOGAL_ERROR: {
			return {
				...state,
				globalError: action.error,
			}
		}
		case CLEAR_GLOGAL_ERROR: {
			return {
				...state,
				globalError: null,
			}
		}
		default: 
		return state;
	}
}

type initializeAppACType = {
	type: typeof INITIALIZE_APP
}
export const initializeApp = ():initializeAppACType => {
	return {
		type:INITIALIZE_APP,
	}
}
type savedGlobalErrorACType = {
	type: typeof SAVED_GLOGAL_ERROR
	error:string
}
export const savedGlobalError = (error:string):savedGlobalErrorACType => {
	return {
		type: SAVED_GLOGAL_ERROR,
		error
	}
}
type clearGlobalErrorACType = {
	type: typeof CLEAR_GLOGAL_ERROR
}
export const clearGlobalError = ():clearGlobalErrorACType => {
	return {
		type: CLEAR_GLOGAL_ERROR,
	}
}
	//лочим боди при попапе убираем скролл
const addBodyClassLock = () => document.body.classList.add('_lock');
const removeBodyClassLock = () => document.body.classList.remove('_lock');
//Thunks
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
//! void не дает работать dispatch
export const initializeAppThunk = () => (dispatch:any) => {
	const promise = dispatch(authMeThunk()); /* или несколько диспатчей и промисов */
	/* dispatch(authMeThunk()); */
	Promise.all([promise])
	.then( ()=> { /* Когда придет ответ запусти наш инишиал_АС */
		dispatch(initializeApp());
	})
}
//todo для обработки ошибки запуска попапа и убирания скролла
export const handlingGlobalErrorThunk = (PromiseRejectionEvent:any) => (dispatch:any) => {
	const reason = String(PromiseRejectionEvent.reason);
	dispatch(savedGlobalError(reason));
	addBodyClassLock();
}
export const clearGlobalErrorThunk = () => (dispatch:any) => {
	dispatch(clearGlobalError());
	removeBodyClassLock();
}

export default appReducer;