
import { newPostActionCreator } from "../../../redux/profile_reducer";
import { trackWritePostActionCreator } from "../../../redux/profile_reducer";
import FormPostRedux from "./UserPosts";
import { connect } from "react-redux";

/* Теперь вся логика у нас тут */
let mapStateTopProps = (state) => {
  return {
    newPostText: state.profile.newPostText,
    posts: state.profile.posts,
  };
};
let mapDispatchTopProps = (dispatch) => {
  return {
    trackWritePost: (text) => {
      dispatch(trackWritePostActionCreator(text));
    },
    createNewPost: () => {
      dispatch(newPostActionCreator());
    },
  };
};
let UserPostsContainer = connect(
  mapStateTopProps,
  mapDispatchTopProps
)(FormPostRedux);
export default UserPostsContainer;
