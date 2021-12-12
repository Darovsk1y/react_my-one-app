const axios = require("axios");

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true, 
	headers:{"API-KEY": "408e3826-292f-4228-986e-4b5b9de1ce18"},
});

export const getUsers = (activePage = 1, pageSize = 10) => {
	return instance
	.get(`users?page=${activePage}&count=${pageSize}`)
	.then((response) =>{
		return response.data;
	})
}
export const unfollowApi = (id) => {
	return instance
	.delete(`follow/${id}`)
   .then(response =>{
		return response.data;
   })
}
export const followApi = (id) => {
	return instance
	.post(`follow/${id}`)
   .then(response =>{
		return response.data;
   })
}
export const authMeApi = () => {
	return instance
	.get(`auth/me`)
   .then(response =>{
		return response.data;
   })
}
export const authMeGetProfileApi = (id) => {
	return instance
	.get(`profile/${id}`)
   .then(response =>{
		return response.data;
   })
}

