import './App.css';
import Header from './components/Header/Header';
import Asside from './components/Asside/Asside';
import Profile from './components/UserMain/UserMain';
import { Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import Muzic from './components/Muzic/Muzic';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

//todo Это компонента - это узел ф-ия, которая по сути является тегом
const App = (props) => {
	/* let state = props.store.getState(); */
	return (
		<div className="app-wrapper">
			<Header />
			<Asside />
			<main className="main">
				<Routes>
					<Route path='/profile/*' element={<Profile />} />
					<Route path='/dialogs/*' element={<DialogsContainer />} />
					<Route path='/news/*' element={<News />} />
					<Route path='/music/*' element={<Muzic />} />
					<Route path='/settings/*' element={<Settings />} />
					<Route path='/users/*' element={<UsersContainer/>} />
				</Routes>
			</main>
		</div>
	);
}
export default App;
