import { mapItemsUpdateHelper } from '../utils/validators/object-helpers';
import { followAPI } from "../api/followAPI";
import { usersAPI } from "../api/usersAPI";
import { UserType } from '../types/types';
import { Dispatch } from 'redux';
import { BaseThunkType, InferActionsType } from './redux_store';
import { ApiResponseType } from '../api/api';

let initialState = {
	users: [] as Array<UserType>,
	totalItemsCount: 0,
	pageSize: 10,
	activePage: 1,
	isfetching: true,
	isDisabled: [] as Array<number>, /* блокировка нажатой кнопки */ //todo Array of Users id
	maxbaselight: 20,/* количество точек пагинации страниц */
	filter: {
		term:"",
		friend: null as null | boolean,
	},
	//isDisabledSearch: false,
}
export type initialStateType = typeof initialState;
export type FilterType = typeof initialState.filter;
type ActionType = InferActionsType<typeof actions> //todo импор ф-ия которая выводит типы
type ThunkType = BaseThunkType<ActionType>

const usersReducer = (state = initialState, action:ActionType):initialStateType =>{
	switch (action.type) {
		case 'react_my-one-app/users/FOLLOW': {
			return {
				...state,
				users: mapItemsUpdateHelper(state.users, "id", action.userid, {followed: true}),
			}
		}
		case 'react_my-one-app/users/UNFOLLOW': {
			return {
				...state,
				users: mapItemsUpdateHelper(state.users, "id", action.userid, {followed: false}),
			}
		}
		case 'react_my-one-app/users/SET_USERS': {
			return {
				...state,
				users: action.users
			}
		}
		case 'react_my-one-app/users/SET_ACTIVE_PAGE': {
			return {
				...state,
				activePage: action.page,
			}
		}
		case 'react_my-one-app/users/SET_TOTAL_USERS_COUNT': {
			return {
				...state,
				totalItemsCount: action.usersCount,
			}
		}
		case 'react_my-one-app/users/TOGGEL_FETCHING': {
			return {
				...state,
				isfetching: action.isfetching,
			}
		}
		case 'react_my-one-app/users/FOLLOWING_DISABLE': {
			return {
				...state,
				isDisabled: action.isfetching ? [...state.isDisabled, action.id ] : state.isDisabled.filter((id) => id !== action.id),
			}
		}
		case 'react_my-one-app/users/SET_FILTER': {
			return {
				...state,
				filter: action.payload,
			}
		}
		default:
			return state;
	}

}
//todo мы удалили готовые типы и выведем их из AC
/* action Creators теперь лежат в обьекте*/
export const actions = {
	setUsers: (users:Array<UserType>) =>{
		return {
			type: 'react_my-one-app/users/SET_USERS',
			users
		} as const
	},

	follow: (userid:number) =>{
		return {
			type: 'react_my-one-app/users/FOLLOW',
			userid
		} as const
	},

	unfollow: (userid:number) =>{
		return {
			type: 'react_my-one-app/users/UNFOLLOW',
			userid
		} as const
	},

	setActivePage: (page:number) =>{
		return {
			type: 'react_my-one-app/users/SET_ACTIVE_PAGE',
			page
		} as const
	},

	setTotalUsersCount: (usersCount:number) =>{
		return {
			type: 'react_my-one-app/users/SET_TOTAL_USERS_COUNT',
			usersCount
		} as const
	},

	toggelFetching: (isfetching:boolean) =>{
		return {
			type: 'react_my-one-app/users/TOGGEL_FETCHING',
			isfetching
		} as const
	},

	toggelFollowDisable: (isfetching:boolean, id:number) =>{
		return {
			type: 'react_my-one-app/users/FOLLOWING_DISABLE',
			isfetching,
			id
		} as const
	},
	setFilter: (filter: FilterType) => {
		return {
			type: 'react_my-one-app/users/SET_FILTER',
			payload: filter
		} as const
	}
}

type DispatchType = Dispatch<ActionType>

/* Thunks */
/* export const getUsersThunk = (activePage:number, pageSize:number):ThunkType => {
	return async (dispatch) => {
		dispatch(actions.toggelFetching(true));
		let data = await usersAPI.getUsers(activePage, pageSize);
		  if(data) {
			dispatch(actions.toggelFetching(false));
			dispatch(actions.setUsers(data.items));
			dispatch(actions.setTotalUsersCount(data.totalCount));
		  };
	}
} */
//! обьединенная логика двух санок
export const getUsersThunk = ( activePage:number, pageSize:number, filter:FilterType):ThunkType => {
	return async (dispatch) => {
		dispatch(actions.toggelFetching(true));
		dispatch(actions.setActivePage(activePage));
		dispatch(actions.setFilter(filter));
		let data = await usersAPI.getUsers(activePage, pageSize, filter.term, filter.friend);
		  if(data) {
			dispatch(actions.toggelFetching(false));
			dispatch(actions.setUsers(data.items));
			dispatch(actions.setTotalUsersCount(data.totalCount));
		  };
	}
}
/* export const getUsersActivePageThunk = (page:number, pageSize:number, filter:FilterType):ThunkType => {
	return async (dispatch) => {
		dispatch(actions.toggelFetching(true));
		dispatch(actions.setActivePage(page));
		dispatch(actions.setFilter(filter));
		let data = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend);
		if(data) {
			dispatch(actions.toggelFetching(false));
			dispatch(actions.setUsers(data.items));
		};
	}
} */
//todo выносим общую логику в методах подписки
	const _followUnfollowFlow = async (dispatch:DispatchType, 
		id:number, 
		apiMethod:(id: number)=> Promise<ApiResponseType>, 
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
		//todo await необходим почему то, хотя он есть в более глубокой логике
		await _followUnfollowFlow(dispatch, id, apiMethod, actions.follow);
	}
}
export const unfollowThunk = (id:number):ThunkType => {
	return async (dispatch) => {
		let apiMethod = followAPI.unfollowApi.bind(followAPI);
		await _followUnfollowFlow(dispatch, id, apiMethod, actions.unfollow);
	}
}
export default usersReducer;