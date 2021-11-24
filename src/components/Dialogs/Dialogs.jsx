import s from "./Dialogs.module.css";
import dialogsElements from "./DialogsElements/DialogsElements";
import messagesElems from './Messages/Messages';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsList}>
        <div className={s.dialogsItem}>{dialogsElements}</div>
      </div>
      <div className={s.messages}>
        {messagesElems}
      </div>
    </div>
  );
};
export default Dialogs;
