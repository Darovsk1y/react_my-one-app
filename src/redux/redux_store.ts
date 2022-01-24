import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import assideReducer from './asside_reducer';
import usersReducer from "./users_reducer";
import authReduser from "./auth_reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './app_reducer';

/* Наши редьюсеры */
/* и наши данные имен блоков для state */
let reducersPack = combineReducers({
	profile: profileReducer,
	dialogs: dialogsReducer,
	asside: assideReducer,
	users: usersReducer,
	auth: authReduser,
	form: formReducer,
	app: appReducer,
});
//todo Извлечение стэйта из Глобального редюсера функции
type RootReduserType = typeof reducersPack;
//todo нам нужно то что она возвращает это можно получить с пом. ReturnType
export type AppStateType = ReturnType<RootReduserType>
//todo Подключение для плагина
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducersPack, composeEnhancers(applyMiddleware(thunkMiddleware)));
    
/* let store = createStore(reducersPack, applyMiddleware(thunkMiddleware)); */
// @ts-ignore
window.__store__ = store;

//todo Тип Выдедет наши типы из АС автоматически
type PropertyesType<T> = T extends {[key: string]: infer U} ? U : never

//ошибка (...args: any) => any //todo чувак ты в ReturnType не можешь ничего закинуть кроме ф-ии 
//type ActionsType<T extends (...args: any) => any> = ReturnType<PropertyesType<T>> ОШИБКА

//todo сделаем уточнение что вернется ф-ия
export type InferActionsType< T extends {[key: string]:(...args: any)=>any} > = ReturnType<PropertyesType<T>>

export default store;