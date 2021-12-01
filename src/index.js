import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
let renderEntireTree =(store)=>{
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App 
				/* state={state} 
				dispatch={store.dispatch.bind(store)} */
				store={store}
				/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
renderEntireTree(store);
/* store  редакса не передает state сам*/
/* store.subscribe(renderEntireTree); */
store.subscribe( ()=>{
	/* let state = store.getState();
	renderEntireTree(state); */
	renderEntireTree(store);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
