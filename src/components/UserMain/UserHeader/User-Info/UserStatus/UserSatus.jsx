import React from "react";
import s from "./../UserInfo.module.css";

export default class UserStatus extends React.Component {
  state = {
    editMode: true,
	status: this.props.status,
  };
  activateEditMode =()=>{
	  /*! метод setState встроенный метод React для обновления переданного св-ва стейта (только ли локального?)*/
	this.setState({editMode: false});
  }
  deActivateEditMode =()=>{
	this.setState({editMode: true});
	this.props.updateStatusThusk(this.state.status);
  }
  /* когда идет ввод */
  onStatusChange = (e) =>{
	this.setState({
		status: e.currentTarget.value
	});
  }
  render() {
    return (
      <div className={s.status}>
        {this.state.editMode ? (
          <div>
            <span onDoubleClick={ this.activateEditMode }>{this.props.status || "----"}</span>
          </div>
        ) : (
          <div>
            <input onChange={this.onStatusChange} onBlur={ this.deActivateEditMode } autoFocus={true} value={this.state.status}/>
          </div>
        )}
      </div>
    );
  }
}
