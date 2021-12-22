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
import LoginContainer from './components/Login/LoginContainer';
import React from 'react';
import { initializeAppThunk } from './redux/app_reducer';
import { connect } from 'react-redux';
import Preloader from './components/global/Preloader/preloader';

class App extends React.Component {
	componentDidMount(){
		/* Теперь проверка на логинизацию выполняется здесь а не в Header AuthContainer */
		this.props.initializeAppThunk();
	}
	render(){
		if(!this.props.initialized) return <Preloader/>
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
						<Route path='/login/*' element={<LoginContainer/>} />
					</Routes>
				</main>
			</div>
		);
	}
}
const mapDispathToProps = (state) => ({
	initialized: state.app.initialized,
})
export default connect(mapDispathToProps, {initializeAppThunk})(App);
