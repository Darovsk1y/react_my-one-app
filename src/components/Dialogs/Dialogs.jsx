import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import NewMessageContainer from './NewMessage/NewMessageContainer';
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {
let messagesElems = props.dialogs.messages.map((message) => {
	return (
	  <Message
		position={message.position}
		message={message.message}
		image={message.image}
		link={message.link}
		key={message.id}
	  />
	);
  });
  let dialogsElements = props.dialogs.dialogs.map((dialog) => {
	return (
	  <DialogItem
		key={dialog.id}
		id={dialog.id}
		name={dialog.name}
		image={dialog.image}
		text={dialog.text}
	  />
	);
  });

if(!props.isAuth) return <Navigate to={"/login"}/>
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsList}>{dialogsElements}</div>
      <div className={s.board}>
        <div className={s.messages}>{messagesElems}</div>
			<NewMessageContainer 
			newMessageText={props.dialogs.newMessageText}
			NewMessageSend={props.NewMessageSend}
			trackMessage={props.trackMessage}
			/>
      </div>
    </div>
	
  );
  
};
export default Dialogs;