//const axios = require("axios");
//todo там мы будем использовать типизацию зашитую в axios
import axios from "axios";
import { ProfileType } from "../types/types";

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true, 
	headers:{"API-KEY": "408e3826-292f-4228-986e-4b5b9de1ce18"},
});
//todo спец ф-ия axios для описания кода ошибки словом
export enum ResultCodeEnum {
	Success = 0,
	Error = 1,
}
//todo будет указана только там где надо вместе с ResultCodeEnum
export enum ResultCodeForCaptcha {
	CapchaError = 10
}
/* создание одного общего обьекта с методами */
export const usersAPI = {
	getUsers (activePage = 1, pageSize = 10) {
		return instance
		.get(`users?page=${activePage}&count=${pageSize}`)
		.then((response) =>{
			return response.data;
		})
	},
}
type UpdateStatusResultType = {
    resultCode: ResultCodeEnum
    messages:Array<string>
    data: {}
}
type UpdateAvatarResultType = {
    resultCode: ResultCodeEnum
    messages:Array<string>
    data: {
		//todo у Димыча в документации там ошибка но мы нашли photos и всё работает
		photos:{ 
			small:string
			large:string
		}
	}
}
type setFormResultType = {
    resultCode: ResultCodeEnum
    messages:Array<string>
    data: {}
}
export const profileAPI = {
	getProfile (id:number) {
		return instance
		//todo Здесь в <сразу пишем что должно вернуться из запроса> !
		.get<ProfileType>(`profile/${id}`)
	},
	getStatus (id:number) {
		return instance
		.get<string>(`profile/status/${id}`)
	},
	updateStatus (status:string) {
		return instance
		.put<UpdateStatusResultType>(`profile/status`, {status})
	},
	//! photo:any доделать
	updateAvatar (photo:any) {
		//todo отправка файла на сервер имеет свои особенности
		const formData = new FormData();
		formData.append("image", photo);

		return instance
		.put<UpdateAvatarResultType>(`profile/photo`, formData, {
			headers: {
			  'Content-Type': 'multipart/form-data'
			}
		});
	},
	setForm(profile:ProfileType){
		return instance
		.put<setFormResultType>(`profile`, profile)
	},
}
type unfollowApiResponseType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: {}
}
export const followAPI = {
	unfollowApi (id:number) {
		return instance
		.delete<unfollowApiResponseType>(`follow/${id}`)
	   .then(response =>{
			return response.data;
	   })
	},
	followApi (id:number) {
		return instance
		.post<unfollowApiResponseType>(`follow/${id}`)
	   .then(response =>{
			return response.data;
	   })
	},
}
type AuthMeApiResponseType = {
	//todo data это тип, так он выглядит если не выносить его в отдел.обьект
	data: {
		id:number
		email:string
		login:string
	  }
	resultCode: ResultCodeEnum
	messages: Array<string>
}
type autchMeLoginResponseType = {
    resultCode:ResultCodeEnum | ResultCodeForCaptcha
    messages:Array<string>
    data: {
      userId:number
    }
}
type autchMeLogoutResponseType = {
	resultCode: ResultCodeEnum
	messages:Array<string>
	data: {}
}
export const authAPI = {
	authMeApi () {
		return instance
		.get<AuthMeApiResponseType>(`auth/me`).then(response=>response.data)
	},
	authMeGetProfileApi (id:number) {
		return instance
		.get<ProfileType>(`profile/${id}`)
	   .then(response =>{
			return response.data;
	   })
	},
	/* авторизация */
	autchMeLoginApi (email:string, password:string, rememberMe:boolean, captcha:string) {
		return instance
		.post<autchMeLoginResponseType>(`/auth/login`, {email, password, rememberMe, captcha})
		.then(response =>{
			return response.data;
	   })
	},
	LogoutApi () {
		return instance
		.delete<autchMeLogoutResponseType>(`/auth/login`); /* сервер удалит куку */
	}
}
type getCaptchaUrlResponseType = {
	url:string
}
export const securityAPI = {
	/* капча */
	getCaptchaUrl () {
		return instance
		.get<getCaptchaUrlResponseType>(`/security/get-captcha-url`);
	}
}