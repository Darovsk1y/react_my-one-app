const ADD_MESSAGE = "ADD-MESSAGE";
const TRACK_WRITE_MESSAGE = "TRACK-WRITE-MESSAGE";

const dialogsReducer =(state, action)=>{
	if(action.type === "ADD-MESSAGE"){
		let newMessage = {
			id: "5",
			image: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
			link: "#/",
			position: "right",
			message: state.newMessageText,
		}
		state.messages.push(newMessage);
		state.newMessageText = '';
	}
	else if(action.type === "TRACK-WRITE-MESSAGE"){
		state.newMessageText = action.message;
	}

	return state;
}
export default dialogsReducer;