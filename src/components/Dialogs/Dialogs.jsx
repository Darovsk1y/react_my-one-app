import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
/* Обработка данных которые пришли из index через props */
  let messagesElems = props.messagesData.map((message) => {
	return <Message message={message.message} key={message.id}/>;
  });
  let dialogsElements = props.dialogsData.map((dialog) => {
	
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
      <div className={s.dialogsList}>
        <div className={s.dialogsItem}>{dialogsElements}</div>
      </div>
      <div className={s.messages}>
        {messagesElems}
      </div>
    </div>
  );
};
export default Dialogs;
