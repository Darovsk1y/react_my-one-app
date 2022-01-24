import NewMessageFormRedux from './NewMessage';
type Props = {
	newMessageActionCreator:(message:string)=>void
}
export type NewMessageFormValuesType ={
	message:string
}
const NewMessageContainer:React.FC<Props> = (props) => {
	const onSubmit = (formData:NewMessageFormValuesType) => {
		props.newMessageActionCreator(formData.message);
		formData.message = "";
	}
  return (
	<NewMessageFormRedux onSubmit={onSubmit}/>
  );
};

export default NewMessageContainer;
