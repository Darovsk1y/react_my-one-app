import './App.css';
import Header from './components/Header/Header';
import Asside from './components/Asside/Asside';
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { Component, Suspense } from 'react';
import { initializeAppThunk, handlingGlobalErrorThunk, clearGlobalErrorThunk } from './redux/app_reducer';
import { connect } from 'react-redux';
import Preloader from './components/global/Preloader/preloader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux_store';
import GlobalError from './components/global/GlobalError/GlobalError';
//todo lazy Loading
const Profile = React.lazy(() => import('./components/UserMain/Profile'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Muzic = React.lazy(() => import('./components/Muzic/Muzic'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));


class App extends Component {
	catchAllUnhandleErrors = (PromiseRejectionEvent) => {
		//? логика обработки Глобальной необработанной ошибки
		this.props.handlingGlobalErrorThunk(PromiseRejectionEvent);
	}
	clearError = () => {
		this.props.clearGlobalErrorThunk();
	}
	componentDidMount(){
		/* Теперь проверка на логинизацию выполняется здесь а не в Header AuthContainer */
		this.props.initializeAppThunk();
		//todo Глобальный обработчик ошибок с сервера
		window.addEventListener('unhandledrejection', this.catchAllUnhandleErrors);
	}
	componentWillUnmount(){
		window.removeEventListener('unhandledrejection', this.catchAllUnhandleErrors);
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
							<Route path='/' element={<Navigate to={'/profile'}/>} />
							<Route path='/profile/*' element={<Profile />} />
							<Route path='/dialogs/*' element={<DialogsContainer />} />
							<Route path='/news/*' element={<News />} />
							<Route path='/music/*' element={<Muzic />} />
							<Route path='/settings/*' element={<Settings />} />
							<Route path='/users/*' element={<UsersContainer pageTitle={"Sumuray test props"}/>} />
							<Route path='/login/*' element={<LoginContainer/>} />
						</Routes>
					</Suspense>
				
				</main>
				{(this.props.globalError) ? <GlobalError globalError={this.props.globalError} clearError={this.clearError}/> : ""}
			</div>
		);
	}
}
const mapDispathToProps = (state) => ({
	initialized: state.app.initialized,
	globalError: state.app.globalError,
})
const AppContainer = connect(mapDispathToProps, {initializeAppThunk, handlingGlobalErrorThunk, clearGlobalErrorThunk})(App);
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