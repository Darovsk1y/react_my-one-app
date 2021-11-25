/*Данные которые пришли к нам с сервера из БД  */
/* let postData = [
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
]; */
/* let messagesData = [
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
]; */
/* let dialogsData = [
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
]; */

let state = {
	profilePage: {
		posts: [
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
		],
	},
	dialogsPage: {
		messages: [
			{
				id: "1",
				position: "left",
				message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla.
			  Error magni ipsa inventore consectetur rerum, accusamus molestias sit
			  quisquam distinctio eius obcaecati debitis tempore modi animi
			  consequuntur dicta quo.`,
			},
			{
				id: "2",
				position: "right",
				message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla.`,
			},
			{
				id: "3",
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
	},
	assidePage: {
		friends: [
			{
				id: "1",
				name: "Raketa",
				image: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
				online: "on",
			},
			{
				id: "2",
				name: "Mivina Mivina",
				image:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7K1e0KwkmpYpPFLGFYejuBWA-6YMCLsrn-_Rs4MUchBIITZpVBjlAz_kJaUdUvcBp18I&usqp=CAU",
				online: "off",
			},
			{
				id: "3",
				name: "Lola Flex",
				image:
					"https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png",
				online: "on",
			},
			{
				id: "4",
				name: "Ruslan Prist",
				image:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ODnhtS6QYwUbinYjsHNdfadmy7KWSJ9vNEqa_W1QWIXxSwDmo175xTs8Kaicb_e7BaQ&usqp=CAU",
				online: "off",
			},
			{
				id: "5",
				name: "Artas Minetil",
				image:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxmS6SY-5v4iZOtTcTuD83nFN0z-u28x2PDos98gyJHcLj8z8Bq2N7o0XORMnjebpwM0&usqp=CAU",
				online: "on",
			},
		],
	}
}
export default state;