const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGEL_FETCHING = "TOGGEL_FETCHING";
const FOLLOWING_DISABLE = "FOLLOWING_DISABLE";

let initialState = {
	users: [],
	totalUsersCount: 0,
	pageSize: 10,
	activePage: 1,
	isfetching: true,
	isfollowing: false, /* блокировка нажатой кнопки */

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
				users: state.users.map(u => {
					if ( u.id === action.userid){
						return {...u, followed: true}
					}
					return u;
				}),
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if ( u.id === action.userid){
						return {...u, followed: false}
					}
					return u;
				}),
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
				isfollowing: action.isfollowing,
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
export const toggelFollowDisable = (isfollowing) =>{
	return {
		type: FOLLOWING_DISABLE,
		isfollowing
	}
}
export default usersReducer;