import { UserType } from "../types/types";
import { instance } from "./api";
type UsersType = {
	items: Array<UserType>
	totalCount: number
	error: string | null
}
export const usersAPI = {
	getUsers(activePage = 1, pageSize = 10, term = '', friend: null|boolean=null) {
		return instance
			//todo вернется спец обьект Аксиоса AxiosResponse<UsersType, any> но мы уточняем в нем свой ответ
			.get<UsersType>(`users?page=${activePage}&count=${pageSize}&term=${term}`+(friend===null ? '' : `&friend=${friend}`))
			.then((response) => {
				return response.data
			})
	},
	/* getFriends(activePage = 1, pageSize = 10, friends = true){
		return instance
		.get<UsersType>(`users?page=${activePage}&count=${pageSize}&friend=${friends}`)
		.then((response)=>{
			return response.data
		})
	}, */
};
