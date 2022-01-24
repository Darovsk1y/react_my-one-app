import usersReducer, { follow, actions, toggelFollowDisable, unfollow } from "./users_reducer";

it(' users should to be received', ()=>{
	//1.test data
	let state = {
		users: [],
		totalUsersCount: 0,
		pageSize: 10,
		activePage: 1,
		isfetching: true,
		isDisabled: [],
	};
	let usersData = [{
		id: 1,
		name: "Alex",
		status: "введен Э. Эвансом в его »",
		photos: {
			"small": null,
			"large": null
		  },
	},
	{
		id: 2,
		name: "Dimon",
		status: "введен Э. Эвансом в его книге с таким же названием «Domain-Driven Design. введен Э. Эвансом в его книге с таким же названием «Domain-Driven Design»",
		photos: {
			"small": null,
			"large": null
		  },
	},
	{
		id: 3,
		name: "Tonny Gat",
		status: "введен Э. Эвансом в его книге с таким же названием «Domain-Driven Design»",
		photos: {
			"small": null,
			"large": null
		  },
	},]
	let action = actions.setUsers(usersData);
	//2. new state
	let newState = usersReducer(state, action);
	//3. expectation
	expect(newState.users.length).toBe(3);
});

let testState = {
	totalUsersCount: 0,
	pageSize: 10,
	activePage: 1,
	isfetching: true,
	isDisabled: [],
	users: [
		{
			id: 1,
			name: "Alex",
			status: "введен Э. Эвансом в его »",
			photos: {
				"small": null,
				"large": null
			  },
			followed: false,
		},
		{
			id: 2,
			name: "Dimon",
			status: "введен Э. Эвансом в его книге с таким же названием «Domain-Driven Design. введен Э. Эвансом в его книге с таким же названием «Domain-Driven Design»",
			photos: {
				"small": null,
				"large": null
			  },
			followed: false,
		},
		{
			id: 3,
			name: "Tonny Gat",
			status: "введен Э. Эвансом в его книге с таким же названием «Domain-Driven Design»",
			photos: {
				"small": null,
				"large": null
			  },
			followed: true,
		},
	]
}
it(' follow should work', ()=>{
	//1. test data
	let action = actions.follow(1);
	//2. new state
	let newState = usersReducer(testState, action);
	//3. expectation
	expect(newState.users[0].followed).toBe(true);
});
it(' unfollow should work', ()=>{
	//1. test data
	let action = actions.unfollow(3);
	//2. new state
	let newState = usersReducer(testState, action);
	//3. expectation
	expect(newState.users[2].followed).toBe(false);
});
it(' clicked button should be disabled before the answer', ()=>{
	let action= actions.toggelFollowDisable(true, 211);
	let newState = usersReducer(testState, action);
	expect(newState.isDisabled[0]).toBe(211);
});