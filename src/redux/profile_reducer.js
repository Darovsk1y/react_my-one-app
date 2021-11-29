/* файл преобразователь. он не вызывает других ф-ий */
/* в state на приходит то к чему мы обращаемя. эй профайлфайл сделай... */
const ADD_POST = "ADD-POST";
const TRACK_WRITE_POST = "TRACK-WRITE-POST";

const profileReducer =(state, action)=>{
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 4,
				likes: 0,
				name: "Raketa",
				avatar: "https://scontent.fdnk5-1.fna.fbcdn.net/v/t1.6435-9/71788193_525812181517269_1225717343393415168_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Sk5ngR6CQa4AX-YK48H&tn=cowQwI4GI2N4ygpU&_nc_ht=scontent.fdnk5-1.fna&oh=1c6d0f524bfa3b80e7e77a8ab7c5b805&oe=61BCB1BD",
				text: state.newPostText,
			}
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case TRACK_WRITE_POST:
			state.newPostText = action.text;
			return state;
		default:
			return state;
	}
}
export const newPostActionCreator = () =>{
	return {
		type:ADD_POST
	}
};
export const trackWritePostActionCreator = (text) =>{
	return {
		type:TRACK_WRITE_POST,
		text: text,
	}
}; 
export default profileReducer;