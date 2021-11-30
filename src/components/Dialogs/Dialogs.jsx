import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import NewMessageContainer from './NewMessage/NewMessageContainer';

const Dialogs = (props) => {
  /* Обработка данных которые пришли из index через props */
  let messagesElems = props.data.messages.map((message) => {
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
  let dialogsElements = props.data.dialogs.map((dialog) => {
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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsList}>{dialogsElements}</div>
      <div className={s.board}>
        <div className={s.messages}>{messagesElems}</div>
			<NewMessageContainer 
			dispatch={props.dispatch}
			data={props.data.newMessageText}/>
      </div>
    </div>
	
  );
  
};
export default Dialogs;