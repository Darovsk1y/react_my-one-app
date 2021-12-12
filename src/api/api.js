const axios = require("axios");
const baseUrl = "https://social-network.samuraijs.com/api/1.0";

export const getUsers = (activePage = 1, pageSize = 10) => {
	return axios
	.get(baseUrl + `/users?page=${activePage}&count=${pageSize}`,
	{withCredentials: true})
	.then((response) =>{
		return response.data;
	})
}
export const unfollowApi = (id) => {
	return axios
	.delete(baseUrl + `//follow/${id}`,
	{withCredentials: true, 
	   headers:{"API-KEY": "408e3826-292f-4228-986e-4b5b9de1ce18"},
   })
   .then(response =>{
		return response.data;
   })
}
export const followApi = (id) => {
	return axios
	.post(baseUrl + `//follow/${id}`,
	{},
	{withCredentials: true, 
	   headers:{"API-KEY": "408e3826-292f-4228-986e-4b5b9de1ce18"},
   })
   .then(response =>{
		return response.data;
   })
}
export const authMeApi = () => {
	return axios
	.get(baseUrl + `/auth/me`, {
		withCredentials: true
	})
   .then(response =>{
		return response.data;
   })
}
export const authMeGetProfileApi = (id) => {
	return axios
	.get(baseUrl + `/profile/${id}`)
   .then(response =>{
		return response.data;
   })
}

