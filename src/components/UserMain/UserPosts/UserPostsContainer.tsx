import { actions } from "../../../redux/profile_reducer";
import UserPosts from "./UserPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux_store";
import { PostType } from "../../../types/types";

type MapStatePropsType = {
	posts: Array<PostType>
}
type MapDispatchPropsType = {
	newPostActionCreator: (text:string)=>void
}
type OwnPropsType = {
	//todo Тут пусто но если удалить OwnPropsType то ругается
}
/* Теперь вся логика у нас тут */
let mapStateTopProps = (state: AppStateType):MapStatePropsType => {
  return {
    posts: state.profile.posts,
  };
};
//! пришлось делать MapDispatchToProps, не читало ключ actions.newMessageActionCreator в connect
let MapDispatchToProps = (dispatch:any) => {
	return {
		newPostActionCreator: (newMessage:string) =>{
			dispatch(actions.newPostActionCreator(newMessage));
		}
	}
}
let UserPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
  mapStateTopProps,
  MapDispatchToProps
)(UserPosts);
export default UserPostsContainer;
