import LoginFormRedux from './NewMessage';
type Props = {
	newMessageActionCreator:(message:string)=>void
}
/* type FormLocalData ={
	message:string
} */
const NewMessageContainer = (props:Props) => {
	//! пока так
	const onSubmit = (formData:any) => {
		console.log(formData);
		props.newMessageActionCreator(formData.message);
		formData.message = "";
	}
  return (
	<LoginFormRedux onSubmit={onSubmit}/>
  );
};

export default NewMessageContainer;
