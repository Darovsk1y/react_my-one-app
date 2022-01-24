import s from "./FormControls.module.css";
import { WrappedFieldProps } from 'redux-form';
/* Создадим универсальную кампаненту HOC в которую будет предедаваться Element т.е "input" и т.п.*/

type FormControlsPropsType = {
	//! вернуться позже
	data:any
}
export const FormControls = (Element: string | React.FC): React.FC<WrappedFieldProps & FormControlsPropsType> => ({input, meta, ...props}) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={s.controls +" "+ (hasError ? s.error : "")}>
			<Element {...props} {...input}></Element>
			{hasError && <div className={s.errMessage}>{meta.error}</div>}
		</div>
	)
}