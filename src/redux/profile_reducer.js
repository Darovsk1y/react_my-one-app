import { profileAPI } from './../api/api';

const ADD_POST = "ADD-POST";
const TRACK_WRITE_POST = "TRACK-WRITE-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
/* const UPDATE_STATUS = "UPDATE_STATUS"; */

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
	newPostText: '',
	profile: null,
	status: "",
};
const profileReducer =(state = initialState, action)=>{
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 4,
				likes: 0,
				name: "Raketa",
				avatar: "https://scontent.fdnk5-1.fna.fbcdn.net/v/t1.6435-9/71788193_525812181517269_1225717343393415168_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Sk5ngR6CQa4AX-YK48H&tn=cowQwI4GI2N4ygpU&_nc_ht=scontent.fdnk5-1.fna&oh=1c6d0f524bfa3b80e7e77a8ab7c5b805&oe=61BCB1BD",
				text: state.newPostText,
				link: "#/",
			}
			return {...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			};
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
		default:
			return state;
	}
}
export const newPostActionCreator = () =>{
	return {
		type:ADD_POST
	}
};
export const trackWritePostActionCreator = (text) =>{
	return {
		type:TRACK_WRITE_POST,
		text: text,
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