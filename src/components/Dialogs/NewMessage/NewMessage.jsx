import s from "./NewMessage.module.css";
import  React  from 'react';
const NewMessage = (props) => {

let newMessage = React.createRef();
	/* Обработчик кнопки */
let NewPostSend = () =>{
	let text = newMessage.current.value;
	alert(text);
};

  return (
    <form action="" className={s.newmessage}>
      <textarea
        name="textarea"
        className={s.textarea}
        placeholder="New message ..."
		ref={newMessage}
      ></textarea>
      <button type="submit" className={s.btn} onClick={NewPostSend}>
        Send
      </button>
    </form>
  );
};
export default NewMessage;
