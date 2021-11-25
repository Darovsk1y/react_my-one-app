import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*Данные которые пришли к нам с сервера из БД  */
let postData = [
	{
		id: 1,
		likes: "2",
		name: "Raketa",
		avatar: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
		text: "Hellow friend!",
	},
	{
		id: 2,
		likes: "8",
		name: "Lola Flex",
		avatar:
			"https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates ",
	},
	{
		id: 3,
		likes: "34",
		name: "Fransua Ewently",
		avatar:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbnEIzrjyxxOY0epeMS4hYgqan30wNAZsIQ&usqp=CAU",
		text: `asperiores nobis, temporibus consequatur ipsa incidunt tempore quam deleniti eum quisquam excepturi quis omnis officiis quas officia illum placeat dolorum?`,
	},
];
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

ReactDOM.render(
	<React.StrictMode>
		<App postData={postData} messagesData={messagesData} dialogsData={dialogsData}/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
