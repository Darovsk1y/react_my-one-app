/* Проверка на заполненность поля */
export const required = value =>{
	if(value) return undefined;
	return "field is required";
}
export const maxLengthCreator = (maxLength) => (value) =>{
	if(value.length > maxLength) return `Max lenght message is ${maxLength} simbols`
	else return
}