import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from "redux";
import {newMessageActionCreator} from "./../../redux/dialogs_reducer";

/* Подключение RR */
let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
  };
};

export default compose(connect(mapStateToProps,{newMessageActionCreator}),
						withAuthRedirect)(Dialogs);
