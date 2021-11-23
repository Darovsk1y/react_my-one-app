import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import s from "./Dialogs.module.css";

/*todo Компоненты не вынесены в отдельный файл   */
const DialogItem = (props) => {
  return (
    <div className={s.dialogsItem}>
      <NavLink to={"/dialogs/" + props.id} className={s.link}>
        <div className={s.dialog}></div>
      </NavLink>
      <Dialog name={props.name} image={props.image} text={props.text} />
    </div>
  );
};
const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};
/*Данные которые пришли к нам с сервера из БД  */
let dialogsData = [
  {
    id: "1",
    name: "Raketa",
    image: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
    text: "Hellow dear friend!",
  },
  {
    id: "2",
    name: "Mivina Mivina",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7K1e0KwkmpYpPFLGFYejuBWA-6YMCLsrn-_Rs4MUchBIITZpVBjlAz_kJaUdUvcBp18I&usqp=CAU",
    text: "Hi. I am the best of the best paladin!",
  },
  {
    id: "3",
    name: "Lola Flex",
    image:
      "https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates ",
  },
  {
    id: "4",
    name: "Ruslan Prist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ODnhtS6QYwUbinYjsHNdfadmy7KWSJ9vNEqa_W1QWIXxSwDmo175xTs8Kaicb_e7BaQ&usqp=CAU",
    text: "I heal in raids, inexpensive! Fast healing without problems! Help and leveling characters!",
  },
];
let dialogsElements = dialogsData.map((dialog) => {
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
let messagesData = [
  {
    id: "1",
    message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla.
	Error magni ipsa inventore consectetur rerum, accusamus molestias sit
	quisquam distinctio eius obcaecati debitis tempore modi animi
	consequuntur dicta quo.`,
  },
  {
    id: "2",
    message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla.`,
  },
  {
    id: "3",
    message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla.
	Error magni ipsa inventore consectetur rerum, accusamus molestias sit
	quisquam distinctio eius obcaecati debitis tempore modi animi
	consequuntur dicta quo Error magni ipsa inventore consectetur rerum,
	accusamus molestias sit quisquam distinctio eius obcaecati debitis
	tempore modi animi consequuntur dicta quo.`,
  },
  {
    id: "4",
    message: `I heal in raids, inexpensive! Fast healing without problems! Help and leveling characters!`,
  },
];
let messagesElems = messagesData.map((message) => {
  return <Message message={message.message} key={message.id}/>;
});

const Dialogs = (props) => {
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
