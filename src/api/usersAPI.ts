import { UserType } from "../types/types";
import { instance } from "./api";
type UsersType = {
	items: Array<UserType>
	totalCount: number
	error: string | null
}
export const usersAPI = {
	getUsers(activePage = 1, pageSize = 10) {
		return instance
			//todo вернется спец обьект Аксиоса AxiosResponse<UsersType, any> но мы уточняем в нем свой ответ
			.get<UsersType>(`users?page=${activePage}&count=${pageSize}`)
			.then((response) => {
				return response.data
			})
	},
};
