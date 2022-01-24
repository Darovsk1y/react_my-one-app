import { mapItemsUpdateHelper } from '../utils/validators/object-helpers';
import { usersAPI, followAPI } from '../api/api';
import { UserType } from '../types/types';
import { Dispatch } from 'redux';
import { AppStateType, InferActionsType } from './redux_store';
import { ThunkAction } from 'redux-thunk';
/* const FOLLOW = "react_my-one-app/users/FOLLOW";
const UNFOLLOW = "react_my-one-app/users/UNFOLLOW";
const SET_USERS = "react_my-one-app/users/SET_USERS";
const SET_ACTIVE_PAGE = "react_my-one-app/users/SET_ACTIVE_PAGE";
const SET_TOTAL_USERS_COUNT = "react_my-one-app/users/SET_TOTAL_USERS_COUNT";
const TOGGEL_FETCHING = "react_my-one-app/users/TOGGEL_FETCHING";
const FOLLOWING_DISABLE = "react_my-one-app/users/FOLLOWING_DISABLE"; */

let initialState = {
	users: [] as Array<UserType>,
	totalItemsCount: 0,
	pageSize: 10,
	activePage: 1,
	isfetching: true,
	isDisabled: [] as Array<number>, /* блокировка нажатой кнопки */ //todo Array of Users id
	maxbaselight: 20,/* количество точек пагинации страниц */
}
type initialStateType = typeof initialState;
type ActionType = InferActionsType<typeof actions> //todo импор ф-ия которая выводит типы

const usersReducer = (state = initialState, action:ActionType):initialStateType =>{
	switch (action.type) {
		case 'FOLLOW': {
			return {
				...state,
				users: mapItemsUpdateHelper(state.users, "id", action.userid, {followed: true}),
			}
		}
		case 'UNFOLLOW': {
			return {
				...state,
				users: mapItemsUpdateHelper(state.users, "id", action.userid, {followed: false}),
			}
		}
		case 'SET_USERS': {
			return {
				...state,
				users: action.users
			}
		}
		case 'SET_ACTIVE_PAGE': {
			return {
				...state,
				activePage: action.page,
			}
		}
		case 'SET_TOTAL_USERS_COUNT': {
			return {
				...state,
				totalItemsCount: action.usersCount,
			}
		}
		case 'TOGGEL_FETCHING': {
			return {
				...state,
				isfetching: action.isfetching,
			}
		}
		case 'FOLLOWING_DISABLE': {
			return {
				...state,
				isDisabled: action.isfetching ? [...state.isDisabled, action.id ] : state.isDisabled.filter((id) => id !== action.id),
			}
		}
		default:
			return state;
	}

}
//todo мы удалиkb готовые типы и выведем их из AC
/* action Creators теперь лежат в обьекте*/
export const actions = {
	setUsers: (users:Array<UserType>) =>{
		return {
			type: 'SET_USERS',
			users
		} as const
	},

	follow: (userid:number) =>{
		return {
			type: 'FOLLOW',
			userid
		} as const
	},

	unfollow: (userid:number) =>{
		return {
			type: 'UNFOLLOW',
			userid
		} as const
	},

	setActivePage: (page:number) =>{
		return {
			type: 'SET_ACTIVE_PAGE',
			page
		} as const
	},

	setTotalUsersCount: (usersCount:number) =>{
		return {
			type: 'SET_TOTAL_USERS_COUNT',
			usersCount
		} as const
	},

	toggelFetching: (isfetching:boolean) =>{
		return {
			type: 'TOGGEL_FETCHING',
			isfetching
		} as const
	},

	toggelFollowDisable: (isfetching:boolean, id:number) =>{
		return {
			type: 'FOLLOWING_DISABLE',
			isfetching,
			id
		} as const
	},
}

/* Thunks Types*/
type DispatchType = Dispatch<ActionType>
//type GetStateType = ()=> AppStateType
//todo 1-что возвращает, 2-Наша глобал.Стэйт,
//todo 3-ExtraThunkArg(третий параметр если он нужен идет после getState)
//todo 4-базовый экшен Redux-а (или наш родной ActionType)
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
/* Thunks */
export const getUsersThunk = (activePage:number, pageSize:number):ThunkType => {
	return async (dispatch, getState) => {
		dispatch(actions.toggelFetching(true));
		let data = await usersAPI.getUsers(activePage, pageSize);
		  if(data) {
			dispatch(actions.toggelFetching(false));
			dispatch(actions.setUsers(data.items));
			dispatch(actions.setTotalUsersCount(data.totalCount));
		  };
	}
}
export const getUsersActivePageThunk = (page:number, pageSize:number):ThunkType => {
	return async (dispatch) => {
		dispatch(actions.toggelFetching(true));
		dispatch(actions.setActivePage(page));
		let data = await usersAPI.getUsers(page, pageSize);
		if(data) {
			dispatch(actions.toggelFetching(false));
			dispatch(actions.setUsers(data.items));
		};
	}
}
//todo выносим общую логику в методах подписки
	const _followUnfollowFlow = async (dispatch:DispatchType, 
		id:number, 
		apiMethod:any, 
		actionCreator:(id:number)=>ActionType) =>{
			dispatch(actions.toggelFollowDisable(true, id));
			let data = await apiMethod(id);
			if (data.resultCode === 0){
				dispatch(actionCreator(id))
			}
			dispatch(actions.toggelFollowDisable(false, id));
		}
//todo
export const followThunk = (id:number):ThunkType => {
	return async (dispatch) => {
		let apiMethod = followAPI.followApi.bind(followAPI);
		_followUnfollowFlow(dispatch, id, apiMethod, actions.follow);
	}
}
export const unfollowThunk = (id:number):ThunkType => {
	return async (dispatch) => {
		let apiMethod = followAPI.unfollowApi.bind(followAPI);
		_followUnfollowFlow(dispatch, id, apiMethod, actions.unfollow);
	}
}
export default usersReducer;