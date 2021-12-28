import { mapItemsUpdateHelper } from '../utils/validators/object-helpers';
import { usersAPI, followAPI } from './../api/api';
const FOLLOW = "react_my-one-app/users/FOLLOW";
const UNFOLLOW = "react_my-one-app/users/UNFOLLOW";
const SET_USERS = "react_my-one-app/users/SET_USERS";
const SET_ACTIVE_PAGE = "react_my-one-app/users/SET_ACTIVE_PAGE";
const SET_TOTAL_USERS_COUNT = "react_my-one-app/users/SET_TOTAL_USERS_COUNT";
const TOGGEL_FETCHING = "react_my-one-app/users/TOGGEL_FETCHING";
const FOLLOWING_DISABLE = "react_my-one-app/users/FOLLOWING_DISABLE";

let initialState = {
	users: [],
	totalUsersCount: 0,
	pageSize: 10,
	activePage: 1,
	isfetching: true,
	isDisabled: [], /* блокировка нажатой кнопки */

/* 	users: [
		{
			id: 1,
			name: "Alex",
			status: "введен Э. Эвансом в его »",
			adress: {
				country: "Italy",
				city: "Barselona",
			},
			avatar: "https://ava-24.com/_ph/98/563228947.jpg",
			isfollow: true,
			link: "#/",
		},
		{
			id: 2,
			name: "Dimon",
			status: "введен Э. Эвансом в его книге с таким же названием «Domain-Driven Design. введен Э. Эвансом в его книге с таким же названием «Domain-Driven Design»",
			adress: {
				country: "Italy",
				city: "Barselona",
			},
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGte8KLfMOmnVn67KS6LldaFP0XWAMfTKNJQ&usqp=CAU",
			isfollow: false,
			link: "#/",
		},
		{
			id: 3,
			name: "Tonny Gat",
			status: "введен Э. Эвансом в его книге с таким же названием «Domain-Driven Design»",
			adress: {
				country: "Italy",
				city: "Barselona",
			},
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh36h4s7bAqe7En8FdKfKJ1MUax-E0WdCmdQ&usqp=CAU",
			isfollow: true,
			link: "#/",
		},
		{
			id: 4,
			name: "Silver Stowm",
			status: "Всем привет друзья! Жду вас в рейдах!",
			adress: {
				country: "Italy",
				city: "Barselona",
			},
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pLSGspy6-x9Ih29O3aEP1_Y3ZITOWgh2oA&usqp=CAU",
			isfollow: false,
			link: "#/",
		},
	], */
}
const usersReducer = (state = initialState, action) =>{
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
				totalUsersCount: action.usersCount,
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
export const setUsers = (users) =>{
	return {
		type: SET_USERS,
		users
	}
}
export const follow = (userid) =>{
	return {
		type: FOLLOW,
		userid
	}
}
export const unfollow = (userid) =>{
	return {
		type: UNFOLLOW,
		userid
	}
}
export const setActivePage = (page) =>{
	return {
		type: SET_ACTIVE_PAGE,
		page
	}
}
export const setTotalUsersCount = (usersCount) =>{
	return {
		type: SET_TOTAL_USERS_COUNT,
		usersCount
	}
}
export const toggelFetching = (isfetching) =>{
	return {
		type: TOGGEL_FETCHING,
		isfetching
	}
}
export const toggelFollowDisable = (isfetching, id) =>{
	return {
		type: FOLLOWING_DISABLE,
		isfetching,
		id
	}
}
/* Thunks */
export const getUsersThunk = (activePage, pageSize) => {
	return async (dispatch) => {
		dispatch(toggelFetching(true));
		let data = await usersAPI.getUsers(activePage, pageSize);
		  if(data) {
			dispatch(toggelFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
		  };
	}
}
export const getUsersActivePageThunk = (page, pageSize) => {
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
	const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) =>{
		dispatch(toggelFollowDisable(true, id));
		let data = await apiMethod(id);
		if (data.resultCode === 0){
			dispatch(actionCreator(id))
		}
		dispatch(toggelFollowDisable(false, id));
	}
//todo
export const followThunk = (id) => {
	return async (dispatch) => {
		let apiMethod = followAPI.followApi.bind(followAPI);
		followUnfollowFlow(dispatch, id, apiMethod, follow);
	}
}
export const unfollowThunk = (id) => {
	return async (dispatch) => {
		let apiMethod = followAPI.unfollowApi.bind(followAPI);
		followUnfollowFlow(dispatch, id, apiMethod, unfollow);
	}
}
export default usersReducer;