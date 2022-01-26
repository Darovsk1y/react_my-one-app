import NewMessageFormRedux from './NewMessage';
type Props = {
	newMessage:(message:string)=>void
}
export type NewMessageFormValuesType ={
	message:string
	name:"message"
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
