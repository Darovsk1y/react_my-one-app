import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import {actions} from "../../redux/dialogs_reducer";//!обьект
import { AppStateType } from "../../redux/redux_store";
import { DialogObjectType, MessageObjectType } from "../../types/types";

/* Подключение RR */
type MapStatePropsType={
	dialogs:{
		messages: Array<MessageObjectType>
		dialogs: Array<DialogObjectType>
	}
}
type MapDispatchPropsType={
	newMessageActionCreator:(text: string) => void
}
type OwnPropsType={}
//! пришлось делать MapDispatchToProps, не читало ключ actions.newMessageActionCreator в connect
let MapDispatchToProps = (dispatch:any) => {
	return {
		newMessageActionCreator: (newMessage:string) =>{
			dispatch(actions.newMessageActionCreator(newMessage));
		}
	}
}
let mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    dialogs: state.dialogs,
  };
};

export default compose(connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,MapDispatchToProps),
						withAuthRedirect)(Dialogs);
