import './App.css';
import Header from './components/Header/Header';
import Asside from './components/Asside/Asside';
//import Profile from './components/UserMain/Profile';
import { Routes, Route } from 'react-router-dom';
//import News from './components/News/News';
//import Muzic from './components/Muzic/Muzic';
//import Settings from './components/Settings/Settings';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import UsersContainer from './components/Users/UsersContainer';
//import LoginContainer from './components/Login/LoginContainer';
import React, { Suspense } from 'react';
import { initializeAppThunk } from './redux/app_reducer';
import { connect } from 'react-redux';
import Preloader from './components/global/Preloader/preloader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux_store';
//todo lazy Loading
const Profile = React.lazy(() => import('./components/UserMain/Profile'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Muzic = React.lazy(() => import('./components/Muzic/Muzic'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));

class App extends React.Component {
	componentDidMount(){
		/* Теперь проверка на логинизацию выполняется здесь а не в Header AuthContainer */
		this.props.initializeAppThunk();
	}
	render(){
		if(!this.props.initialized) return <Preloader/>
		return (
			<div className="app-wrapper" role='main'>
				<Header />
				<Asside />
				<main className="main">
					<Suspense fallback={<Preloader/>}>
						<Routes>
							<Route path='/profile/*' element={<Profile />} />
							<Route path='/dialogs/*' element={<DialogsContainer />} />
							<Route path='/news/*' element={<News />} />
							<Route path='/music/*' element={<Muzic />} />
							<Route path='/settings/*' element={<Settings />} />
							<Route path='/users/*' element={<UsersContainer/>} />
							<Route path='/login/*' element={<LoginContainer/>} />
						</Routes>
					</Suspense>
				
				</main>
			</div>
		);
	}
}
const mapDispathToProps = (state) => ({
	initialized: state.app.initialized,
})
const AppContainer = connect(mapDispathToProps, {initializeAppThunk})(App);
//todo Эта глобал.обертка была создана для коррект.работы теста App
let GlobalApp = (props) => {
	return(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>)
}
export default GlobalApp;