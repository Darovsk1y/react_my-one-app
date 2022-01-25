import { instance } from "./api";

type getCaptchaUrlResponseType = {
	url: string;
};
export const securityAPI = {
	/* капча */
	getCaptchaUrl() {
		return instance
			.get<getCaptchaUrlResponseType>(`/security/get-captcha-url`);
	}
};
