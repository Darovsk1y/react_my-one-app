import React from 'react';
import Auth from './Auth';
import { connect } from 'react-redux';
import { authMeThink } from './../../../redux/auth_reducer';

class AuthContainer extends React.Component {
	componentDidMount(){
		this.props.authMeThink();
	}
	render () {
		return <Auth {...this.props}/>
	}
}
let mapStateToProps = (state) =>({
	login: state.auth.login,
	isAuth: state.auth.isAuth,
	activeUser: state.auth.activeUser,
})

export default connect (mapStateToProps, {authMeThink})(AuthContainer);