import s from "./NewMessage.module.css";
import  React  from 'react';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { FormControls } from '../../global/FormControls/FormControls';
import { UniversalKeysFormType } from "../../../types/types";

const Textarea = FormControls("textarea");
let maxLength100 = maxLengthCreator(100);
type OwnProps = {

}
export type NewMessageFormValuesType ={
	message:string
}
//todo задаем тип Field что бы ждать от него опред.константу name
type FieldType = UniversalKeysFormType<NewMessageFormValuesType>
const NewMessage:React.FC<InjectedFormProps<NewMessageFormValuesType, OwnProps> & OwnProps> = (props) => {
  return (
    <form action="" className={s.newmessage} onSubmit={props.handleSubmit}>
      <Field<FieldType>
	  component={Textarea}
        name="message"
        className={s.textarea}
		placeholder="new message"
		validate={[required, maxLength100]}
      ></Field>
      <button className={s.btn}>
        Send
      </button>
    </form>
  );
};
const NewMessageFormRedux = reduxForm<NewMessageFormValuesType, OwnProps>({
	// a unique name for the form
  form: 'message'
})(NewMessage)
export default NewMessageFormRedux;
