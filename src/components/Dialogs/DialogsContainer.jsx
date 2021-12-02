
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  newMessageActionCreator,
  trackMessageActionCreator,
} from "./../../redux/dialogs_reducer";

/* Подключение RR */
let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    NewMessageSend: () => {
      dispatch(newMessageActionCreator());
    },
    trackMessage: (text) => {
      dispatch(trackMessageActionCreator(text));
    },
  };
};
const MyDialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);


export default MyDialogsContainer;
