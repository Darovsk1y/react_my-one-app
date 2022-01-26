import { FormAction, stopSubmit } from 'redux-form';
import { profileAPI } from "../api/profileAPI";
import { PhotosType, PostType, ProfileType } from '../types/types';
import { BaseThunkType, InferActionsType } from './redux_store';

let initialState = {
	posts: [
		{
			id: 1,
			likes: 2,
			name: "Raketa",
			avatar: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
			text: "Hellow friend!",
			link: "#/",
		},
		{
			id: 2,
			likes: 8,
			name: "Lola Flex",
			avatar:
				"https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates ",
			link: "#/",
		},
		{
			id: 3,
			likes: 34,
			name: "Fransua Ewently",
			avatar:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbnEIzrjyxxOY0epeMS4hYgqan30wNAZsIQ&usqp=CAU",
			text: `asperiores nobis, temporibus consequatur ipsa incidunt tempore quam deleniti eum quisquam excepturi quis omnis officiis quas officia illum placeat dolorum?`,
			link: "#/",
		},
	] as Array<PostType>,
	profile: null as ProfileType | null,
	status: "",
};
//todo вынесли особо нужные Type от сюда во внешний файл /types/types
type ActionType = InferActionsType<typeof actions>
export type InitialStateType = typeof initialState;
type ThunkType = BaseThunkType<ActionType | FormAction>

const profileReducer = (state = initialState, action:ActionType):InitialStateType => {
	switch (action.type) {
		case 'react_my-one-app/profile/ADD-POST': {
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
			} else {
				return {...state};
			}
		}
		case 'react_my-one-app/profile/SET_USER_PROFILE': {
			return {...state,
				profile: action.profile,
			};
		}
		case 'react_my-one-app/profile/SET_STATUS': {
			return {...state,
				status: action.status,
			};
		}
		case 'react_my-one-app/profile/DELETE_POST': {
			return {
				...state,
				posts: state.posts.filter(p => p.id !== action.id)
			}
		}
		case 'react_my-one-app/profile/SAVE_PHOTO': {
			return{
				...state,
				//! Исправить позже с Димычем
				profile: {...state.profile, photos: action.photos} as ProfileType
			}
		}
		default:
			return state;
	}
}
export const actions = {
	newPostActionCreator: (text:string) =>{
		return {
			type:'react_my-one-app/profile/ADD-POST',
			text
		} as const
	},
	setUserProfile: (profile:ProfileType) =>{
		return {
			type:'react_my-one-app/profile/SET_USER_PROFILE',
			profile
		} as const
	},
	setStatus: (status:string) =>{
		return {
			type:'react_my-one-app/profile/SET_STATUS',
			status
		} as const
	},
	deletePostAC: (id:number) =>{
		return{
			type: 'react_my-one-app/profile/DELETE_POST',
			id
		} as const
	},
	savePhotoSuccsess: (photos:PhotosType) =>{
		return{
			type: 'react_my-one-app/profile/SAVE_PHOTO',
			photos
		} as const
	}
}

/* Thusks */
export const getProfileThusk = (userId:number):ThunkType => {
	return async (dispatch) => {
		let data = await profileAPI.getProfile(userId)
		if(data){
			dispatch(actions.setUserProfile(data))
		}
	}
}
export const setStatusThusk = (userId:number):ThunkType => {
	return async (dispatch) => {
		let data = await profileAPI.getStatus(userId)
		if(data){
			dispatch(actions.setStatus(data))
		}
	}
}
export const updateStatusThusk = (status:string):ThunkType => {
	return async (dispatch) => {
		let data = await profileAPI.updateStatus(status);
		if(data){
			if(data.resultCode === 0){
				dispatch(actions.setStatus(status))
			}
		}
	}
}
export const savePhotoThunk = (photo:File):ThunkType => {
	return async (dispatch) => {
		let data = await profileAPI.updateAvatar(photo)
		//todo вырезали у Димыча нет такого if(data){ }
		if(data.resultCode === 0){
			dispatch(actions.savePhotoSuccsess(data.data.photos))
		}
	}
}
export const setFormThunk = (formData:ProfileType):ThunkType =>{
	//todo userId number а в auth.id может быть null решил получить прямои из формы
	return async (dispatch, getState) => {
		/* const userId = getState().auth.id; */
		const data = await profileAPI.setForm(formData)
		if(data){
			if(data.resultCode === 0){
				dispatch(getProfileThusk(formData.userId))
			} else {
				const message = data.messages.length > 0 ? data.messages[0] : "Some error";
				//общая ошибка
				dispatch(stopSubmit("profile", {_error: message}));
				return Promise.reject(message);

				//todo ошибка поля /Мой личный код
				/* dispatch(stopSubmit("profile", {"contacts":{"twitter": message}})); */
				/* let{textError, section, subSection} = getFormatErrors(message);
				dispatch(stopSubmit("profile", {[section]:{[subSection]: textError}}));
				debugger */
			}
		}
	}
}
//todo функция извлечения значений поля из ошибки /Мой личный код
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