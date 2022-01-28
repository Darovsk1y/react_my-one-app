import NewMessageFormRedux, { NewMessageFormValuesType } from './NewMessage';

type Props = {
	newMessage:(message:string)=>void
}

const NewMessageContainer:React.FC<Props> = (props) => {
	//todo точные тыпы что надо получить
	const onSubmit = (formData:NewMessageFormValuesType) => {
		props.newMessage(formData.message);
		formData.message = "";
	}
  return (
	<NewMessageFormRedux onSubmit={onSubmit}/>
  );
};

export default NewMessageContainer;
