import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import assideReducer from './asside_reducer';
import usersReducer from "./users_reducer";
import authReduser from "./auth_reducer";
import thunkMiddleware from 'redux-thunk';

/* Наши редьюсеры */
/* и наши данные имен блоков для state */
let reducersPack = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	asside: assideReducer,
	users: usersReducer,
	auth: authReduser,
});
/*! теперь ф=ия getState вернет нам такие же названия для разделов как мы задали Редюсерам выше */
let store = createStore(reducersPack, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;