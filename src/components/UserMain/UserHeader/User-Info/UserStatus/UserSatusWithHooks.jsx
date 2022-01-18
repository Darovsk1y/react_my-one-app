import { useEffect, useState } from "react";
import s from "./../UserInfo.module.css"; /* Наш первый ХУК */

const UserStatusWithHooks = (props) => {
	/* ДЕструктуризация */
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);
	useEffect( () => {
		setStatus(props.status);
	}, [props.status]);
	/* Больше мы можем не хранить локальный стэйт он хранится на стороне реакт */
	let activateEditMode = () => {
		setEditMode(true);
	}
	let deActivateEditMode =() =>{
		setEditMode(false);
		props.updateStatusThusk(status);
	  }
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	}
    return (
      <div className={s.status}>
        {!editMode ? (
          <div>
			{props.isOwner ? <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
			: <span>{props.status || "----"}</span>}
          </div>
        ) : (
          <div>
            <input autoFocus={true} onChange={onStatusChange} onBlur={deActivateEditMode} value={status}/>
          </div>
        )}
      </div>
    );
}
export default UserStatusWithHooks;