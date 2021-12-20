import s from "./FormControls.module.css";
export const Textarea = ({input, meta, ...props}) => {
const hasError = meta.touched && meta.error;
	return (
		<div className={s.controls +" "+ (hasError ? s.error : "")}>
			<textarea {...props} {...input}></textarea>
			{hasError && <div className={s.errMessage}>{meta.error}</div>}
		</div>

	)
}
export const Input = ({input, meta, ...props}) => {
const hasError = meta.touched && meta.error;
	return (
		<div className={s.controls +" "+ (hasError ? s.error : "")}>
			<input {...props} {...input}></input>
			{hasError && <div className={s.errMessage}>{meta.error}</div>}
		</div>

	)
}