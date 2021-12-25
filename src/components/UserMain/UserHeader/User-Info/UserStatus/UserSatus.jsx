import React from "react";
import s from "./../UserInfo.module.css";

export default class UserStatus extends React.Component {
  state = {
    editMode: true,/* закончен ли ввод данных */
	status: this.props.status,
  };
  activateEditMode =()=>{
	  /*! метод setState встроенный метод React для обновления переданного св-ва стейта (только ли локального?)*/
	this.setState({editMode: false});
  }
  deActivateEditMode =()=>{
	this.setState({editMode: true}); 
	this.props.updateStatusThusk(this.state.status);/* Обновляем глобальный стейт через запрос на сервер и таску*/
  }
  /* когда идет ввод */
  onStatusChange = (e) =>{
	this.setState({
		status: e.currentTarget.value
	});
  }
  componentDidUpdate(prevProps, prevState) {
	  if(prevProps.status !== this.props.status){
		this.setState({status: this.props.status});
	  }
  }
  render() {
	  debugger
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
