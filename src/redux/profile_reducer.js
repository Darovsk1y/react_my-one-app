import { stopSubmit } from 'redux-form';
import { profileAPI } from './../api/api';

const ADD_POST = "react_my-one-app/profile/ADD-POST";
const SET_USER_PROFILE = "react_my-one-app/profile/SET_USER_PROFILE";
const SET_STATUS = "react_my-one-app/profile/SET_STATUS";
const DELETE_POST = "react_my-one-app/profile/DELETE_POST";
const SAVE_PHOTO = "react_my-one-app/profile/SAVE_PHOTO";

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
					/* id: 4, */
					id: state.posts.length +1,
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
				posts: state.posts.filter(p => p.id !== action.id)
			}
		}
		case SAVE_PHOTO: {
			return{
				...state,
				profile: {...state.profile, photos: action.photos}
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
/* после санки загрузки фото обновим его*/
export const savePhotoSuccsess = (photos) =>{
	return{
		type: SAVE_PHOTO,
		photos
	}
}
/* Thusks */
export const getProfileThusk = (userId) => {
	return async (dispatch) => {
		let data = await profileAPI.getProfile(userId)
		if(data){
			//debugger
			dispatch(setUserProfile(data.data));
		}
	}
}
export const setStatusThusk = (userId) => {
	return async (dispatch) => {
		let data = await profileAPI.getStatus(userId)
		if(data){
			dispatch(setStatus(data.data));
		}
	}
}
export const updateStatusThusk = (status) => {
	return async (dispatch) => {
		let data = await profileAPI.updateStatus(status);
		if(data){
			if(data.data.resultCode === 0){
				dispatch(setStatus(status));
			}
		}
	}
}
export const savePhotoThunk = (photo) => {
	return async (dispatch) => {
		let data = await profileAPI.updateAvatar(photo)
		if(data){
			if(data.data.resultCode === 0){
				dispatch(savePhotoSuccsess(data.data.data.photos))
			}
		}
	}
}
export const setFormThunk = (formData) =>{
	//! если редюсер видит dispatch, то он увидит и getState
	return async (dispatch, getState) => {
		const userId = getState().auth.id;
		const data = await profileAPI.setForm(formData)
		if(data){
			debugger
			if(data.data.resultCode === 0){
				dispatch(getProfileThusk(userId));
			} else {
				const message = data.data.messages.length > 0 ? data.data.messages[0] : "Some error";
				//общая ошибка
				dispatch(stopSubmit("profile", {_error: message}));
				return Promise.reject(message);
				//todo ошибка поля
				/* dispatch(stopSubmit("profile", {"contacts":{"twitter": message}})); */
				/* let{textError, section, subSection} = getFormatErrors(message); */
			/* 	const textError = parseError.textError;
				const section = parseError.section;
				const subSection = parseError.subSection; */
				/* debugger
				dispatch(stopSubmit("profile", {section:{subSection: textError}})); */
			}
		}
	}
}
//todo функция извлечения значений поля из ошибки
// Invalid url format (Contacts->Twitter)
/* const getFormatErrors = (message) =>{
	let formaterMessage = message.split(/\(/);
	const textError = formaterMessage[0].trim();
	const twoSplit = formaterMessage[1].split(/\)/);
	const sectionSubsection = twoSplit[0].trim().split(/\->/);
	const section = sectionSubsection[0].trim();
	const subSection = sectionSubsection[1].trim();
	return {textError, section, subSection}
} */
/* getFormatErrors("Invalid url format (Contacts->Twitter)"); */

export default profileReducer;