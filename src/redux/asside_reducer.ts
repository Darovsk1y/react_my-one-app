import { usersAPI } from "../api/usersAPI";
import { FriendType } from "../types/types";
import { BaseThunkType, InferActionsType } from "./redux_store";

let initialState = {
	friends: [
		{
			id: 1,
			name: "Raketa",
			photos: {
				small: "https://social-network.samuraijs.com/activecontent/images/users/21550/user-small.jpg?v=1",
				large: "https://social-network.samuraijs.com/activecontent/images/users/21550/user.jpg?v=1"
			},
			followed: true,
		},
		{
			id: 2,
			name: "Mivina Mivina",
			photos: {
				small: "https://social-network.samuraijs.com/activecontent/images/users/21550/user-small.jpg?v=1",
				large: "https://social-network.samuraijs.com/activecontent/images/users/21550/user.jpg?v=1"
			},
			followed: true,
		},
		{
			id: 3,
			name: "Lola Flex",
			photos: {
				small: "https://social-network.samuraijs.com/activecontent/images/users/21550/user-small.jpg?v=1",
				large: "https://social-network.samuraijs.com/activecontent/images/users/21550/user.jpg?v=1"
			},
			followed: true,
		},
		{
			id: 4,
			name: "Ruslan Prist",
			photos: {
				small: "https://social-network.samuraijs.com/activecontent/images/users/21550/user-small.jpg?v=1",
				large: "https://social-network.samuraijs.com/activecontent/images/users/21550/user.jpg?v=1"
			},
			followed: true,
		},
		{
			id: 5,
			photos: {
				small: "https://social-network.samuraijs.com/activecontent/images/users/21550/user-small.jpg?v=1",
				large: "https://social-network.samuraijs.com/activecontent/images/users/21550/user.jpg?v=1"
			},
			followed: true,
		},
	] as Array<FriendType>,
}
type initialStateType = typeof initialState;
type ActionType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionType>


const assideReducer =(state = initialState, action:any):initialStateType=>{
	switch(action.type){
		case "SET_TYPE" : {
			return {
				...state, friends: action.friends
			}
		}
		default:
			return state;
	}
}

export const actions = {
	setFriends: (friends:Array<FriendType>) => {
		return {
			type: 'SET_TYPE',
			friends
		} as const
	}
}

export const setFriendsThunk =():ThunkType => async (dispatch) =>{
	let data = await usersAPI.getUsers(1, 10, '', true);
	if(data){
		dispatch(actions.setFriends(data.items))
	}
}

export default assideReducer;