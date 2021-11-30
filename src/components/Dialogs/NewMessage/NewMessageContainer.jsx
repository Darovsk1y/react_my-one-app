import { newMessageActionCreator } from '../../../redux/dialogs_reducer';
import { trackMessageActionCreator } from '../../../redux/dialogs_reducer';
import NewMessage from './NewMessage';

const NewMessageContainer = (props) => {
let NewMessageSend = () =>{
	props.dispatch(newMessageActionCreator());
};
let trackMessage =(text) =>{
	let action = trackMessageActionCreator(text);
	props.dispatch(action);
};
  return (
	<NewMessage newMessageSend={NewMessageSend} trackMessage={trackMessage} data={props.data}/>
  );
};
export default NewMessageContainer;
