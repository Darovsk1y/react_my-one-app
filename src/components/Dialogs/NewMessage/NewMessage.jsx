import s from "./NewMessage.module.css";
import  React  from 'react';
const NewMessage = (props) => {

let newMessage = React.createRef();
	/* Обработчик кнопки */
let NewPostSend = () =>{
	props.dispatch({type:"ADD-MESSAGE"});
};
let trackMessage =() =>{
	let text = newMessage.current.value;
	props.dispatch({type:"TRACK-WRITE-MESSAGE",
					message: text});
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
