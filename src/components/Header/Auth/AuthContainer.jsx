import React from 'react';
import Auth from './Auth';
import { connect } from 'react-redux';
import { setAuthUserData, setAuthUserProfile } from './../../../redux/auth_reducer';

const axios = require("axios");

class AuthContainer extends React.Component {
	componentDidMount(){
		axios
		.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
		.then(response =>{
			if(response.data.resultCode === 0){
				let {id, email, login} = {...response.data.data}
				this.props.setAuthUserData(id, email, login);
				axios
				.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`)
				.then(response => {
					this.props.setAuthUserProfile(response.data);
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