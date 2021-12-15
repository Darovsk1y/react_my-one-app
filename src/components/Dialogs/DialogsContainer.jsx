import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from "redux";
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

export default compose(connect(mapStateToProps,mapDispatchToProps),
						withAuthRedirect)(Dialogs);
