
import { authMeThunk } from './auth_reducer';
const INITIALIZE_APP = "react_my-one-app/app/INITIALIZE_APP";

let intialState = {
	initialized: false,
}
const appReducer = (state = intialState, action) => {
	switch (action.type){
		case INITIALIZE_APP: {
			return {
				...state,
				initialized: true,
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

export const initializeAppThunk = () => (dispath) => {
	const promise = dispath(authMeThunk()); /* или несколько диспатчей и промисов */
	/* dispath(authMeThunk()); */
	Promise.all([promise])
	.then( ()=> { /* Когда придет ответ запусти наш инишиал_АС */
		dispath(initializeApp());
	})
}

export default appReducer;