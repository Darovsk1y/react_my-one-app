import { profileAPI } from './../api/api';

const ADD_POST = "ADD-POST";
const TRACK_WRITE_POST = "TRACK-WRITE-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
	posts: [
		{
			id: 1,
			likes: "2",
			name: "Raketa",
			avatar: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
			text: "Hellow friend!",
			link: "#/",
		},
		{
			id: 2,
			likes: "8",
			name: "Lola Flex",
			avatar:
				"https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates ",
			link: "#/",
		},
		{
			id: 3,
			likes: "34",
			name: "Fransua Ewently",
			avatar:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbnEIzrjyxxOY0epeMS4hYgqan30wNAZsIQ&usqp=CAU",
			text: `asperiores nobis, temporibus consequatur ipsa incidunt tempore quam deleniti eum quisquam excepturi quis omnis officiis quas officia illum placeat dolorum?`,
			link: "#/",
		},
	],
	profile: null,
	status: "",
};
const profileReducer =(state = initialState, action)=>{
	switch (action.type) {
		case ADD_POST: {
			if (state.profile){
				let newPost = {
					id: 4,
					likes: 0,
					name: state.profile.fullName ? state.profile.fullName : "Nou Name",
					avatar: state.profile.photos.large ? state.profile.photos.large :"https://i0.wp.com/slovami.net/wp-content/uploads/2018/04/1-36-1024x1024.jpg",
					text: action.text,
					link: `/profile/${state.profile.userId}`,
				}
				return {...state,
					posts: [...state.posts, newPost],
				};
			}
			else return alert("Кто вы?");
		}
		case TRACK_WRITE_POST: {
			return {...state,
				newPostText: action.text,
			};
		}
		case SET_USER_PROFILE: {
			return {...state,
				profile: action.profile,
			};
		}
		case SET_STATUS: {
			return {...state,
				status: action.status,
			};
		}
		case DELETE_POST: {
			return {
				...state,
				posts: state.posts.filter(p => p.id != action.id)
			}
		}
		default:
			return state;
	}
}
export const newPostActionCreator = (text) =>{
	return {
		type:ADD_POST,
		text
	}
};
export const setUserProfile = (profile) =>{
	return {
		type:SET_USER_PROFILE,
		profile
	}
};
export const setStatus = (status) =>{
	return {
		type:SET_STATUS,
		status
	}
};
export const deletePostAC = (id) =>{
	return{
		type: DELETE_POST,
		id
	}
}

/* Thusks */
export const getProfileThusk = (userId) => {
	return (dispatch) => {
		profileAPI.getProfile(userId)
		.then( response =>{
			dispatch(setUserProfile(response.data));
		})
	}
}
export const setStatusThusk = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId)
		.then( response =>{
			dispatch(setStatus(response.data));
		})
	}
}
export const updateStatusThusk = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status)
		.then( response =>{
			if(response.data.resultCode === 0){
				dispatch(setStatus(status));
			}
		})
	}
}
/* export const updateAvatarThusk = (photo) => {
	return (dispatch) => {
		profileAPI.updateAvatar(photo)
		.then( response =>{
			if(response.data.resultCode === 0){
				console.log("Photo update");
			}
		})
	}
} */
export default profileReducer;