const axios = require("axios");

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true, 
	headers:{"API-KEY": "408e3826-292f-4228-986e-4b5b9de1ce18"},
});

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
export const profileAPI = {
	getProfile (id) {
		return instance
		.get(`profile/${id}`)
	},
	getStatus (id) {
		return instance
		.get(`profile/status/${id}`)
	},
	updateStatus (status) {
		return instance
		.put(`profile/status`, {status})
	},
	updateAvatar (photo) {
		//todo отправка файла на сервер имеет свои особенности
		const formData = new FormData();
		formData.append("image", photo);

		return instance
		.put(`profile/photo`, formData, {
			headers: {
			  'Content-Type': 'multipart/form-data'
			}
		});
	},
	setForm(profile){
		return instance
		.put(`profile`, profile)
	},
}
export const followAPI = {
	unfollowApi (id) {
		return instance
		.delete(`follow/${id}`)
	   .then(response =>{
			return response.data;
	   })
	},
	followApi (id) {
		return instance
		.post(`follow/${id}`)
	   .then(response =>{
			return response.data;
	   })
	},
}
export const authAPI = {
	authMeApi () {
		return instance
		.get(`auth/me`)
	   .then(response =>{
			return response.data;
	   })
	},
	authMeGetProfileApi (id) {
		return instance
		.get(`profile/${id}`)
	   .then(response =>{
			return response.data;
	   })
	},
	/* авторизация */
	autchMeLoginApi (email, password, rememberMe) {
		return instance
		.post(`/auth/login`, {email, password, rememberMe})
		.then(response =>{
			return response.data;
	   })
	},
	LogoutApi () {
		return instance
		.delete(`/auth/login`); /* сервер удалит куку */
	}
}