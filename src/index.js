import reportWebVitals from './reportWebVitals';
import state, { addMessage, trackWritePost } from './redux/state';
import { renderEntireTree } from './render';
import { addPost, trackWriteMessage } from './redux/state';


renderEntireTree(state,addPost,addMessage,trackWritePost, trackWriteMessage);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
