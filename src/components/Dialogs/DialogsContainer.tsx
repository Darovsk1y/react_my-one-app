import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import {newMessageActionCreator} from "../../redux/dialogs_reducer";
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
let mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    dialogs: state.dialogs,
  };
};

export default compose(connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,{newMessageActionCreator}),
						withAuthRedirect)(Dialogs);
