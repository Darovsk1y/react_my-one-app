import { ThunkAction } from 'redux-thunk';
import { authMeThunk } from './auth_reducer';
import { AppStateType, InferActionsType } from './redux_store';

let intialState = {
	initialized: false,
	globalError: null as string|null,
}
type intialStateType = typeof intialState
type ActionType = InferActionsType<typeof actions>
const appReducer = (state = intialState, action:ActionType):intialStateType => {
	switch (action.type){
		case 'react_my-one-app/app/INITIALIZE_APP': {
			return {
				...state,
				initialized: true,
			}
		}
		case 'react_my-one-app/app/SAVED_GLOGAL_ERROR': {
			return {
				...state,
				globalError: action.error
			}
		}
		case 'react_my-one-app/app/CLEAR_GLOGAL_ERROR': {
			return {
				...state,
				globalError: null,
			}
		}
		default: 
		return state;
	}
}
const actions = {
	initializeApp: () => {
		return {
			type:'react_my-one-app/app/INITIALIZE_APP',
		} as const
	},
	savedGlobalError: (error:string) => {
		return {
			type: 'react_my-one-app/app/SAVED_GLOGAL_ERROR',
			error
		} as const
	},
	clearGlobalError: () => {
		return {
			type: 'react_my-one-app/app/CLEAR_GLOGAL_ERROR',
		} as const
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
		dispatch(actions.initializeApp());
	})
}
//todo для обработки ошибки запуска попапа и убирания скролла
export const handlingGlobalErrorThunk = (PromiseRejectionEvent:any) => (dispatch:any) => {
	const reason = String(PromiseRejectionEvent.reason);
	dispatch(actions.savedGlobalError(reason));
	addBodyClassLock();
}
export const clearGlobalErrorThunk = () => (dispatch:any) => {
	dispatch(actions.clearGlobalError());
	removeBodyClassLock();
}

export default appReducer;