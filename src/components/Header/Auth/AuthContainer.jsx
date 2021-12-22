import React from 'react';
import Auth from './Auth';
import { connect } from 'react-redux';
import { LogoutThunk } from './../../../redux/auth_reducer';

class AuthContainer extends React.Component {
	
	onOut = () =>{
		this.props.LogoutThunk();
	}
	render () {
		return <Auth {...this.props} onOut={this.onOut}/>
	}
}
let mapStateToProps = (state) =>({
	login: state.auth.login,
	isAuth: state.auth.isAuth,
	activeUser: state.auth.activeUser,
})

export default connect(mapStateToProps, {LogoutThunk})(AuthContainer);