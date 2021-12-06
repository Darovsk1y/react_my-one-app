import User from "./User/User";
import s from "./Users.module.css";
import React from "react";
const axios = require("axios");

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUser(response.data.items);
      });
  }

  /*   userElements = () =>{
    this.props.users.map((u) => {
      return (
        <User
          key={u.id}
          id={u.id}
          name={u.name}
          status={u.status}
          adress={"u.adress"}
          avatar={
            u.photos.large != null
              ? u.photos
              : "https://ava-24.com/_ph/98/563228947.jpg"
          }
          isfollow={u.followed}
          link={u.link != null ? u.link : "#/"}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          setUser={this.props.setUser}
        />
      );
    });
} */
  /*! Не удальсь вынести map в отдельную ф-ию, ругается что --> Функции недействительны в качестве дочерних React  */
  render() {
    return (
      <div className={s.users}>
        <div className={s.body}>
          <ul className={s.userList}>
            {/* поэтому вставили кодом без отдельного вызова и убрав return */}
            {this.props.users.map((u) => (
              <User
                key={u.id}
                id={u.id}
                name={u.name}
                status={u.status}
                adress={"u.adress"}
                avatar={
                  u.photos.large != null
                    ? u.photos
                    : "https://ava-24.com/_ph/98/563228947.jpg"
                }
                isfollow={u.followed}
                link={u.link != null ? u.link : "#/"}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setUser={this.props.setUser}
              />
            ))}
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