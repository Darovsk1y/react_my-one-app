import './App.css';
import Header from './components/Header/Header';
import Asside from './components/Asside/Asside';
import Profile from './components/UserMain/UserMain';
import { Routes, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Muzic from './components/Muzic/Muzic';
import Settings from './components/Settings/Settings';

//todo Это компонента - это узел ф-ия, которая по сути является тегом
const App = (props) => {
	return (
		<div className="app-wrapper">
			<Header />
			<Asside data={props.state.assidePage} />
			<main className="main">
				<Routes>
					<Route path='/profile/*' element={<Profile
						data={props.state.profilePage}
						addPost={props.addPost}
						trackWritePost={props.trackWrite}
					/>} />
					<Route path='/dialogs/*' element={<Dialogs
						data={props.state.dialogsPage}
						addMessage={props.addMessage}
						trackWriteMessage={props.trackWriteMessage} />}
					/>
					<Route path='/news/*' element={<News />} />
					<Route path='/music/*' element={<Muzic />} />
					<Route path='/settings/*' element={<Settings />} />
				</Routes>
			</main>
		</div>
	);
}
export default App;
