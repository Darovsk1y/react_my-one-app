
let initialState = {
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
};

const assideReducer =(state = initialState, action)=>{
	/* пока нет данных */
	return state;
}
export default assideReducer;