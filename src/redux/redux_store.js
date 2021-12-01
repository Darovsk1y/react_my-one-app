import { combineReducers, createStore } from "redux";
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import assideReducer from './asside_reducer';

/* Наши редьюсеры */

let reducersPack = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	asside: assideReducer,
});
/*! теперь ф=ия getState вернет нам такие же названия для разделов как мы задали Редюсерам выше */
let store = createStore(reducersPack);

export default store;