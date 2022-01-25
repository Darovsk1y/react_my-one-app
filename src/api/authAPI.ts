import { ProfileType } from "../types/types";
import { ResultCodeEnum, ResultCodeForCaptcha, instance, ApiResponseType } from "./api";

type AuthMeDataType = {
	id: number
	email: string
	login: string
};
/* type AuthMeApiResponseType = {
	data: {
		id: number
		email: string
		login: string
	};
	resultCode: ResultCodeEnum
	messages: Array<string>
}; */
type autchMeLoginDataType = {
	userId: number
}

export const authAPI = {
	authMeApi() {
		return instance
			.get<ApiResponseType<AuthMeDataType>>(`auth/me`).then(response => response.data)
	},
	authMeGetProfileApi(id: number) {
		return instance
			.get<ProfileType>(`profile/${id}`)
			.then(response => {
				return response.data
			})
	},
	/* авторизация */ //todo Добавили состояния по умолчанияю через =
	autchMeLoginApi(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
		return instance
			.post<ApiResponseType<autchMeLoginDataType, ResultCodeEnum|ResultCodeForCaptcha>>(`/auth/login`, { email, password, rememberMe, captcha })
			.then(response => { 
				return response.data
			})
	},
	LogoutApi() {
		return instance
			.delete<ApiResponseType>(`/auth/login`) /* сервер удалит куку */
	}
};
