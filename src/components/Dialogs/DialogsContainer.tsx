import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from "redux";
import {newMessageActionCreator} from "../../redux/dialogs_reducer";
import { AppStateType } from "../../redux/redux_store";

/* Подключение RR */
let mapStateToProps = (state:AppStateType) => {
  return {
    dialogs: state.dialogs,
  };
};

export default compose(connect(mapStateToProps,{newMessageActionCreator}),
						withAuthRedirect)(Dialogs);
