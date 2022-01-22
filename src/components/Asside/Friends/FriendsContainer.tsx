import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux_store";
import { FriendType } from "../../../types/types";
import Friends from './Friends';
type MapStatePropsType = {
	friends: Array<FriendType>
}
let mapStateToProps = (state:AppStateType):MapStatePropsType => {
	return {
		friends: state.asside.friends,
	}
}
type MapDispatchPropsType = {}
type OwnPropsType = {}
const FriendsContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
	mapStateToProps
  )(Friends);
export default FriendsContainer;
