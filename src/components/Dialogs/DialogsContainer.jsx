import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import {
  newMessageActionCreator,
  trackMessageActionCreator,
} from "./../../redux/dialogs_reducer";

/* Подключение RR */
let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
    /* 	isAuth: state.auth.isAuth, */
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const MyDialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default MyDialogsContainer;
