import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu-nav';
import Main from './components/Main/Main';

//todo Это компонента - это узел ф-ия, которая по сути является тегом
const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Menu/>
			<Main/>
		</div>
	);
}
export default App;
