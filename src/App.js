import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu-nav';
import Profile from './components/User/UserMain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Muzic from './components/Muzic/Muzic';
import Settings from './components/Settings/Settings';

//todo Это компонента - это узел ф-ия, которая по сути является тегом
const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Menu />
				<main className="main">
					<Routes>
						<Route path='/profile/*' element={<Profile />} />
						<Route path='/dialogs/*' element={<Dialogs />} />
						<Route path='/news/*' element={<News />} />
						<Route path='/music/*' element={<Muzic />} />
						<Route path='/settings/*' element={<Settings />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}
export default App;
