import React from 'react';
import Auth from './Auth';
import { connect } from 'react-redux';
import { setAuthUserData, setAuthUserProfile } from './../../../redux/auth_reducer';
import { authAPI } from './../../../api/api';

class AuthContainer extends React.Component {
	componentDidMount(){
		authAPI.authMeApi()
		.then(data =>{
			if(data.resultCode === 0){
				let {id, email, login} = {...data.data}
				this.props.setAuthUserData(id, email, login);
				authAPI.authMeGetProfileApi(data.data.id)
				.then(data => {
					this.props.setAuthUserProfile(data);
				})
			}
		})
	
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

export default connect (mapStateToProps, {setAuthUserData, setAuthUserProfile})(AuthContainer);