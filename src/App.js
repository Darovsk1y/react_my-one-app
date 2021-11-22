import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu-nav';
import UserMain from './components/Main/UserMain';
/* import Dialogs from './components/Dialogs/Dialogs'; */

//todo Это компонента - это узел ф-ия, которая по сути является тегом
const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Menu/>
			<main className="main">
				<UserMain/>
			{/* 	<Dialogs/> */}
			</main>
		</div>
	);
}
export default App;
