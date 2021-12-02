import s from "./NewMessage.module.css";
import  React  from 'react';

const NewMessage = (props) => {

let newMessage = React.createRef();
	/* Обработчик кнопки */
let NewMessageSend = () =>{
	props.newMessageSend();
};
let trackMessage =() =>{
	let text = newMessage.current.value;
	props.trackMessage(text);
};

  return (
    <form action="" className={s.newmessage}>
      <textarea
        name="textarea"
        className={s.textarea}
        value={props.newMessageText}
		ref={newMessage}
		onChange={trackMessage}
      ></textarea>
      <button type="button" className={s.btn} onClick={NewMessageSend}>
        Send
      </button>
    </form>
  );
};
export default NewMessage;
