import s from "./../Dialogs.module.css";

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};
/*Данные которые пришли к нам с сервера из БД  */

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

export default messagesElems;