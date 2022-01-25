import { instance, ApiResponseType } from "./api";

export const followAPI = {
	unfollowApi(id: number) {
		return instance
			.delete<ApiResponseType>(`follow/${id}`)
			.then(response => {
				return response.data
			})
	},
	followApi(id: number) {
		return instance
			.post<ApiResponseType>(`follow/${id}`)
			.then(response => {
				return response.data
			})
	},
};
