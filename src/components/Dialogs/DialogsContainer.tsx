import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import {actions, DialogsStateType} from "../../redux/dialogs_reducer";
import { AppStateType } from "../../redux/redux_store";
//import { DialogObjectType, MessageObjectType } from "../../types/types";

type MapStatePropsType= {dialogs: DialogsStateType}
//зачем писать совой если можно взять в стэйте

type MapDispatchPropsType={
	newMessage:(text: string) => void
}
type OwnPropsType={}

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    dialogs: state.dialogs,
  };
};

export default compose<React.ComponentType>(connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
	(mapStateToProps,{newMessage: actions.newMessageActionCreator}),
						withAuthRedirect)(Dialogs);
