import s from "./Dialogs.module.css";
/* import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem"; */
import NewMessageContainer from './NewMessage/NewMessageContainer';

const Dialogs = (props) => {
/* let state = props.store.getState();
 */
/*   let messagesElems = state.dialogs.messages.map((message) => {
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
  let dialogsElements = state.dialogs.dialogs.map((dialog) => {
    return (
      <DialogItem
        key={dialog.id}
        id={dialog.id}
        name={dialog.name}
        image={dialog.image}
        text={dialog.text}
      />
    );
  }); */

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsList}>{props.dialogsElements}</div>
      <div className={s.board}>
        <div className={s.messages}>{props.messagesElems}</div>
			<NewMessageContainer 
			newMessageText={props.newMessageText}
			dispatch={props.dispatch}/>
      </div>
    </div>
	
  );
  
};
export default Dialogs;