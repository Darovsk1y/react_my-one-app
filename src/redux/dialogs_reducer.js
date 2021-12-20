const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
	messages: [
		{
			id: "1",
			image: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
			link: "#/",
			position: "left",
			message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla.
		  Error magni ipsa inventore consectetur rerum, accusamus molestias sit
		  quisquam distinctio eius obcaecati debitis tempore modi animi
		  consequuntur dicta quo.`,
		},
		{
			id: "2",
			image: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
			link: "#/",
			position: "right",
			message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla.`,
		},
		{
			id: "3",
			image: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
			link: "#/",
			position: "left",
			message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla.
		  Error magni ipsa inventore consectetur rerum, accusamus molestias sit
		  quisquam distinctio eius obcaecati debitis tempore modi animi
		  consequuntur dicta quo Error magni ipsa inventore consectetur rerum,
		  accusamus molestias sit quisquam distinctio eius obcaecati debitis
		  tempore modi animi consequuntur dicta quo.`,
		},
		{
			id: "4",
			image: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
			link: "#/",
			position: "right",
			message: `I heal in raids, inexpensive! Fast healing without problems! Help and leveling characters!`,
		},
	],
	dialogs: [
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
	],
};

const dialogsReducer =(state = initialState, action)=>{

	switch(action.type) {
		case ADD_MESSAGE: {
			let newMessage = {
				id: "5",
				image: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
				link: "#/",
				position: "right",
				message: action.text,
			}
			return {...state,
				messages: [...state.messages, newMessage],
			};
		}
		default:
			return state;
	}
}
export const newMessageActionCreator = (text) =>{
	return {
		type:ADD_MESSAGE,
		text
	}
};

export default dialogsReducer;