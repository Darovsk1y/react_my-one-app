import LoginFormRedux from './NewMessage';

const NewMessageContainer = (props) => {
	const onSubmit = (formData) => {
		console.log(formData);
		props.newMessageActionCreator(formData.message);
		formData.message = "";
	}
  return (
	<LoginFormRedux onSubmit={onSubmit}/>
  );
};

export default NewMessageContainer;
