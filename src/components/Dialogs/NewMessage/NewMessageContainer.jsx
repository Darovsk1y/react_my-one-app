
import NewMessage from './NewMessage';

const NewMessageContainer = (props) => {

  return (
	<NewMessage newMessageSend={props.NewMessageSend} trackMessage={props.trackMessage} newMessageText={props.newMessageText}/>
  );
};
export default NewMessageContainer;
