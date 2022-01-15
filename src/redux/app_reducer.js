
import { authMeThunk } from './auth_reducer';
const INITIALIZE_APP = "react_my-one-app/app/INITIALIZE_APP";
const SAVED_GLOGAL_ERROR = "react_my-one-app/app/SAVED_GLOGAL_ERROR";
const CLEAR_GLOGAL_ERROR = "react_my-one-app/app/CLEAR_GLOGAL_ERROR";

let intialState = {
	initialized: false,
	globalError: null,
}
const appReducer = (state = intialState, action) => {
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

export const initializeApp = () => {
	return {
		type:INITIALIZE_APP,
	}
}
export const savedGlobalError = (error) => {
	return {
		type: SAVED_GLOGAL_ERROR,
		error
	}
}
export const clearGlobalError = () => {
	return {
		type: CLEAR_GLOGAL_ERROR,
	}
}
	//лочим боди при попапе убираем скролл
const addBodyClassLock = () => document.body.classList.add('_lock');
const removeBodyClassLock = () => document.body.classList.remove('_lock');

export const initializeAppThunk = () => (dispatch) => {
	const promise = dispatch(authMeThunk()); /* или несколько диспатчей и промисов */
	/* dispatch(authMeThunk()); */
	Promise.all([promise])
	.then( ()=> { /* Когда придет ответ запусти наш инишиал_АС */
		dispatch(initializeApp());
	})
}
//todo для обработки ошибки запуска попапа и убирания скролла
export const handlingGlobalErrorThunk = (PromiseRejectionEvent) => (dispatch) => {
	const reason = String(PromiseRejectionEvent.reason);
	dispatch(savedGlobalError(reason));
	addBodyClassLock();
}
export const clearGlobalErrorThunk = () => (dispatch) => {
	dispatch(clearGlobalError());
	removeBodyClassLock();
}

export default appReducer;