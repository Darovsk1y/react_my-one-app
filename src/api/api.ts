//const axios = require("axios");
//todo там мы будем использовать типизацию зашитую в axios
import axios from "axios";

export const instance = axios.create({
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
//Код отсюда был вынесен в отдельные файлы

//todo создадим общий тип что бы сократить код и будем в него передавать уточнения
//также зададим значения по умолчанию =
export type ApiResponseType<D={}, RC=ResultCodeEnum> = {
	data: D
	messages: Array<string>
	resultCode: RC
}