
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
let state = props.store.getState();
  /* Обработка данных которые пришли из index через props */
  let messagesElems = state.dialogs.messages.map((message) => {
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
  });
  
  return (
	<Dialogs dialogsElements={dialogsElements}
	messagesElems={messagesElems}
	newMessageText={state.dialogs.newMessageText}
	dispatch={props.store.dispatch}
	 />
  );
  
};
export default DialogsContainer;