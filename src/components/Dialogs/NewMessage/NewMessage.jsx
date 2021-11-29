import s from "./NewMessage.module.css";
import  React  from 'react';
import { newMessageActionCreator } from './../../../redux/dialogs_reducer';
import { trackMessageActionCreator } from './../../../redux/dialogs_reducer';

const NewMessage = (props) => {
let newMessage = React.createRef();
	/* Обработчик кнопки */
let NewPostSend = () =>{
	props.dispatch(newMessageActionCreator());
};
let trackMessage =() =>{
	let text = newMessage.current.value;
	props.dispatch(trackMessageActionCreator(text));
};

  return (
    <form action="" className={s.newmessage}>
      <textarea
        name="textarea"
        className={s.textarea}
        value={props.data.newMessageText}
		ref={newMessage}
		onChange={trackMessage}
      ></textarea>
      <button type="button" className={s.btn} onClick={NewPostSend}>
        Send
      </button>
    </form>
  );
};
export default NewMessage;
