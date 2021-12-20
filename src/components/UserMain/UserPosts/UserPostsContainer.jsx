import { newPostActionCreator } from "../../../redux/profile_reducer";
import UserPosts from "./UserPosts";
import { connect } from "react-redux";

/* Теперь вся логика у нас тут */
let mapStateTopProps = (state) => {
  return {
    posts: state.profile.posts,
  };
};

let UserPostsContainer = connect(
  mapStateTopProps,
  {newPostActionCreator}
)(UserPosts);
export default UserPostsContainer;
