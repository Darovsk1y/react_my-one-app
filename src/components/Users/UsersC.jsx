import User from "./User/User";
import s from "./Users.module.css";
import React from "react";
const axios = require("axios");

class Users extends React.Component {
  componentDidMount(){
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUser(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  clickActivePage = (page) =>{
	this.props.setActivePage(page);
	axios
	.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
	.then((response) => {
	  this.props.setUser(response.data.items);
	});
  }
  mapUsers = ()=>{
	return this.props.users.map((u) => {
		return <User
		  key={u.id}
		  id={u.id}
		  name={u.name}
		  status={u.status}
		  adress={"u.adress"}
		  avatar={
			u.photos.large != null
			  ? u.photos.small
			  : "https://ava-24.com/_ph/98/563228947.jpg"
		  }
		  isfollow={u.followed}
		  link={u.link != null ? u.link : "#/"}
		  follow={this.props.follow}
		  unfollow={this.props.unfollow}
		  setUser={this.props.setUser}
		/>
	  })
  }
  /* Global ut */
  t_start = 1
  pagesOrderingStart = (t_start) =>{
	  /* считаем точку начала цикла относительно активоной страницы */
	this.props.activePage <=10 ? t_start = 1 : t_start = this.props.activePage - 10;
	return t_start;
  }
  t_finish = 20
  pagesOrderingFinish = (t_finish) =>{
	  /* считаем конечную точку цикла в зависимости от активной страницы */
	this.props.activePage <=10 ? t_finish = this.props.activePage + 20 - this.props.activePage : t_finish = this.props.activePage + 10;
	return t_finish;
  }
 
  render() {
	let t_start = this.pagesOrderingStart(this.t_start);
	let t_finish = this.pagesOrderingFinish(this.t_finish);
	  /* let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize); */
	  let pages = [];
	  for(t_start; t_start <=t_finish; t_start++){
		pages.push(t_start);
	  }
	  /* ТАкже в обработчике должна быть именно стрелочная ф-ия иначе всё равно циклится? */

    return (
      <div className={s.users}>
        <div className={s.body}>
			<div className={s.paginnation}>
				{pages.map(page => {
					return <span className={this.props.activePage === page ? s.paginpage +" "+ s.active : s.paginpage} onClick={() =>{this.clickActivePage(page)}}>{page}</span>
				})}
			</div>
          <ul className={s.userList}>
            {this.mapUsers()}
          </ul>
          <button type="button" className={s.button}>
            Load more
          </button>
        </div>
      </div>
    );
  }
}

export default Users;
