import s from "./FormControls.module.css";
/* Создадим универсальную кампаненту HOC в которую будет предедаваться Element т.е "input" и т.п.*/
export const FormControls = Element => ({input, meta, ...props}) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={s.controls +" "+ (hasError ? s.error : "")}>
			<Element {...props} {...input}></Element>
			{hasError && <div className={s.errMessage}>{meta.error}</div>}
		</div>
	)
}