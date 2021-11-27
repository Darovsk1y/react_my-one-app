import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* import reportWebVitals from './reportWebVitals'; */
/* import state from './redux/state'; */

import { BrowserRouter } from 'react-router-dom';

export let renderEntireTree =(state, addPost, addMessage, trackWritePost, trackWriteMessage)=>{
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} 
				addPost={addPost} 
				addMessage={addMessage} 
				trackWritePost={trackWritePost} 
				trackWriteMessage={trackWriteMessage}/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}