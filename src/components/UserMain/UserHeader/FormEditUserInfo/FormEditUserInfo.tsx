import s from "./../User-Info/UserInfo.module.css";
import f from "../../../global/FormControls/FormControls.module.css";
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { FormControls } from "../../../global/FormControls/FormControls";
import { maxLengthCreator } from "../../../../utils/validators/validators";
import { ContactsType, ProfileType, UniversalKeysFormType } from "../../../../types/types";
import { FormEditUserInfoValuesType } from "../UserHeader";
/* import { required } from './../../../../utils/validators/validators'; */
import Preloader from './../../../global/Preloader/preloader';

const Input = FormControls("input");
const Textarea = FormControls("textarea");
let maxLength30 = maxLengthCreator(30);

type OwnProps = {
	status: string
	profile: ProfileType | null
	error?: string
} 
//todo задаем тип Field что бы ждать от него опред.константу name
type FieldType = UniversalKeysFormType<ProfileType>
const ProfileForm:React.FC<InjectedFormProps<ProfileType ,OwnProps> &OwnProps> = ({handleSubmit, status, profile, error}) => {
	if(!profile){
		return <Preloader/>
	}
	return (
    <form className={s.form} onSubmit={handleSubmit}>
		<div className={s.line}>
			<div className={s.param +" "+ s.param_name}>name</div>
			<Field<FieldType> component={Input} className={s.param +" "+ s.param_name+" "+ s.param_input} 
			type="text" name={"fullName"} validate={[maxLength30]} 
			placeholder={profile.fullName}/>
     	</div>
		 <div className={s.status}>{status}</div>

		<div className={s.line}>
			<div className={s.param}>About Me</div>
			<Field<FieldType> component={Textarea} className={s.answer+" "+ s.param_input} 
			type="text" name={"aboutMe"} 
			placeholder={profile.aboutMe}/>
		</div>
			  	
		<div className={s.line}>
			<div className={s.param}>Looking for a job</div>
			<div className={s.answer+" "+ s.param_checkboxBlock}>
				<Field<FieldType> component={Input} className={s.param_checkbox} 
				type="checkbox" name={"lookingForAJob"} 
				/>
			</div>
		</div>
	  	<div className={s.line}>
			<div className={s.param}>Looking for a job Description</div>
			<Field<FieldType> component={Textarea} className={s.answer+" "+ s.param_input} 
			type="text" name={"lookingForAJobDescription"} 
			placeholder={profile.lookingForAJobDescription}/>
		</div>
		<div className={s.line}>
			<div className={s.param}>contacts: </div>
		</div>

		{/*! Пробуем реализовать цикл для contacts */}
		{Object.keys(profile.contacts).map(key => {
		  return (
			<div className={s.line} key={key}>
				<div className={s.param}>{key}</div>
				<Field component={Input} className={s.answer+" "+ s.param_input} 
				type="text" name={`contacts.${key}`} 
				/>
			</div>
		  )
		})}
		{/* обработка ошибок */}
		{error ? 
		<div className={f.formError}>{error}</div>
		 : ""
		}
		<button className={s.button} type="submit">Save</button>
	</form>
  )
};

const FormEditUserInfo = reduxForm<ProfileType, OwnProps>({
	// a unique name for the form
  form: 'profile'
})(ProfileForm)

export default FormEditUserInfo;