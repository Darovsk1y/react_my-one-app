import React from "react";
import s from "./../UserInfo.module.css";

export default class UserStatus extends React.Component {
  state = {
    editMode: true,
  };
  activateEditMode =()=>{
	this.setState({editMode: false});
  }
  deActivateEditMode =()=>{
	this.setState({editMode: true});
  }
  render() {

    return (
      <div className={s.status}>
        {this.state.editMode ? (
          <div>
            <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
          </div>
        ) : (
          <div>
            <input onBlur={ this.deActivateEditMode } autoFocus={true} value={this.props.status} />
          </div>
        )}
      </div>
    );
  }
}
