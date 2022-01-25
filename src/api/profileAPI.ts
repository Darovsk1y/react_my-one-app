import { PhotosType, ProfileType } from "../types/types";
import { instance, ApiResponseType } from "./api";

type UpdateAvatarResultDataType = {
	//todo у Димыча в документации там ошибка но мы нашли photos и всё работает
	photos: PhotosType
};

export const profileAPI = {
	getProfile(id: number) {
		return instance
			//todo Здесь в <сразу пишем что должно вернуться из запроса> !
			.get<ProfileType>(`profile/${id}`)
			.then(response => {
				return response.data
			})
	},
	getStatus(id: number) {
		return instance
			.get<string>(`profile/status/${id}`)
			.then(response => {
				return response.data
			})
	},
	updateStatus(status: string) {
		return instance
			.put<ApiResponseType>(`profile/status`, { status })
			.then(response => {
				return response.data
			})
	},
	//! photo:any доделать
	updateAvatar(photo: any) {
		//todo отправка файла на сервер имеет свои особенности
		const formData = new FormData();
		formData.append("image", photo);

		return instance
			.put<ApiResponseType<UpdateAvatarResultDataType>>(`profile/photo`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			.then(response => {
				return response.data;
			})
	},
	setForm(profile: ProfileType) {
		return instance
			.put<ApiResponseType>(`profile`, profile)
			.then(response => {
				return response.data;
			})
	},
};
