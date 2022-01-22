import { mapItemsUpdateHelper } from '../utils/validators/object-helpers';
import { usersAPI, followAPI } from '../api/api';
import { UserType } from '../types/types';
import { Dispatch } from 'redux';
import { AppStateType } from './redux_store';
import { ThunkAction } from 'redux-thunk';
const FOLLOW = "react_my-one-app/users/FOLLOW";
const UNFOLLOW = "react_my-one-app/users/UNFOLLOW";
const SET_USERS = "react_my-one-app/users/SET_USERS";
const SET_ACTIVE_PAGE = "react_my-one-app/users/SET_ACTIVE_PAGE";
const SET_TOTAL_USERS_COUNT = "react_my-one-app/users/SET_TOTAL_USERS_COUNT";
const TOGGEL_FETCHING = "react_my-one-app/users/TOGGEL_FETCHING";
const FOLLOWING_DISABLE = "react_my-one-app/users/FOLLOWING_DISABLE";

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
type ActionType = setUsersType | followType | unfollowType |
setActivePageType | setTotalUsersCountType | toggelFetchingType |
toggelFollowDisableType;
const usersReducer = (state = initialState, action:ActionType):initialStateType =>{
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: mapItemsUpdateHelper(state.users, "id", action.userid, {followed: true}),
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: mapItemsUpdateHelper(state.users, "id", action.userid, {followed: false}),
			}
		}
		case SET_USERS: {
			return {
				...state,
				users: action.users
			}
		}
		case SET_ACTIVE_PAGE: {
			return {
				...state,
				activePage: action.page,
			}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...state,
				totalItemsCount: action.usersCount,
			}
		}
		case TOGGEL_FETCHING: {
			return {
				...state,
				isfetching: action.isfetching,
			}
		}
		case FOLLOWING_DISABLE: {
			return {
				...state,
				isDisabled: action.isfetching ? [...state.isDisabled, action.id ] : state.isDisabled.filter((id) => id !== action.id),
			}
		}
		default:
			return state;
	}

}

/* action Creators */
type setUsersType = {
	type: typeof SET_USERS,
		users:Array<UserType>
}
export const setUsers = (users:Array<UserType>):setUsersType =>{
	return {
		type: SET_USERS,
		users
	}
}
type followType = {
	type: typeof FOLLOW,
	userid:number
}
export const follow = (userid:number):followType =>{
	return {
		type: FOLLOW,
		userid
	}
}
type unfollowType = {
	type: typeof UNFOLLOW,
	userid:number
}
export const unfollow = (userid:number):unfollowType =>{
	return {
		type: UNFOLLOW,
		userid
	}
}
type setActivePageType = {
	type: typeof SET_ACTIVE_PAGE,
	page:number
}
export const setActivePage = (page:number):setActivePageType =>{
	return {
		type: SET_ACTIVE_PAGE,
		page
	}
}
type setTotalUsersCountType = {
	type: typeof SET_TOTAL_USERS_COUNT,
	usersCount:number
}
export const setTotalUsersCount = (usersCount:number):setTotalUsersCountType =>{
	return {
		type: SET_TOTAL_USERS_COUNT,
		usersCount
	}
}
type toggelFetchingType = {
	type: typeof TOGGEL_FETCHING,
	isfetching:boolean
}
export const toggelFetching = (isfetching:boolean):toggelFetchingType =>{
	return {
		type: TOGGEL_FETCHING,
		isfetching
	}
}
type toggelFollowDisableType = {
	type: typeof FOLLOWING_DISABLE,
	isfetching:boolean
	id:number
}
export const toggelFollowDisable = (isfetching:boolean, id:number):toggelFollowDisableType =>{
	return {
		type: FOLLOWING_DISABLE,
		isfetching,
		id
	}
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
		dispatch(toggelFetching(true));
		let data = await usersAPI.getUsers(activePage, pageSize);
		  if(data) {
			dispatch(toggelFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
		  };
	}
}
export const getUsersActivePageThunk = (page:number, pageSize:number):ThunkType => {
	return async (dispatch) => {
		dispatch(toggelFetching(true));
		dispatch(setActivePage(page));
		let data = await usersAPI.getUsers(page, pageSize);
		if(data) {
			dispatch(toggelFetching(false));
			dispatch(setUsers(data.items));
		};
	}
}
//todo выносим общую логику в методах подписки
	const _followUnfollowFlow = async (dispatch:DispatchType, 
		id:number, 
		apiMethod:any, 
		actionCreator:(id:number)=>unfollowType|followType) =>{
			dispatch(toggelFollowDisable(true, id));
			let data = await apiMethod(id);
			if (data.resultCode === 0){
				dispatch(actionCreator(id))
			}
			dispatch(toggelFollowDisable(false, id));
		}
//todo
export const followThunk = (id:number):ThunkType => {
	return async (dispatch) => {
		let apiMethod = followAPI.followApi.bind(followAPI);
		_followUnfollowFlow(dispatch, id, apiMethod, follow);
	}
}
export const unfollowThunk = (id:number):ThunkType => {
	return async (dispatch) => {
		let apiMethod = followAPI.unfollowApi.bind(followAPI);
		_followUnfollowFlow(dispatch, id, apiMethod, unfollow);
	}
}
export default usersReducer;