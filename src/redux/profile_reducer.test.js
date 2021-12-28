import profileReducer, { deletePostAC, newPostActionCreator } from "./profile_reducer";
let state = {
	posts: [
		{
			id: 1,
			likes: "2",
			name: "Raketa",
			avatar: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
			text: "Hellow friend!",
			link: "#/",
		},
		{
			id: 2,
			likes: "8",
			name: "Lola Flex",
			avatar:
				"https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates ",
			link: "#/",
		},
		{
			id: 3,
			likes: "34",
			name: "Fransua Ewently",
			avatar:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbnEIzrjyxxOY0epeMS4hYgqan30wNAZsIQ&usqp=CAU",
			text: `asperiores nobis, temporibus consequatur ipsa incidunt tempore quam deleniti eum quisquam excepturi quis omnis officiis quas officia illum placeat dolorum?`,
			link: "#/",
		},
	],
	profile: {
		userId: 2,
		fullName: "Test",
		photos:
			{large: null,
				small: null,}
	}
}

it(' lendth should be changed at added new post', ()=>{
	// 1. test data
	let action = newPostActionCreator("it-camasutra.com");
	// 2.new state
	let newState = profileReducer(state, action);
	// 3. expectation
	expect(newState.posts.length).toBe(4);
});

it(' message of new post should be correct', ()=>{
	// 1. test data
	let action = newPostActionCreator("it-camasutra.com");
	// 2.new state
	let newState = profileReducer(state, action);
	// 3. expectation
	expect(newState.posts[3].text).toBe("it-camasutra.com");
});

it(' lenght should be changed at delete post', ()=>{
	// 1. test data
	let action = deletePostAC(1);
	// 2.new state
	let newState = profileReducer(state, action);
	// 3. expectation
	expect(newState.posts.length).toBe(2);
});

it(` after deleted post lenght shouldn't be changed if id incorrect`, ()=>{
	// 1. test data
	let action = deletePostAC(1000);
	// 2.new state
	let newState = profileReducer(state, action);
	// 3. expectation
	expect(newState.posts.length).toBe(3);
});


