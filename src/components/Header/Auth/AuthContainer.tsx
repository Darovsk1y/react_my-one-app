import React from 'react';
import Auth from './Auth';
import { connect } from 'react-redux';
import { LogoutThunk } from '../../../redux/auth_reducer';
import { ProfileType } from '../../../types/types';
import { AppStateType } from '../../../redux/redux_store';

type MapStatePropsType = {
	login: string | null
	isAuth: boolean
	activeUser: ProfileType | null
}
type MapDispatchPropsType = {
	LogoutThunk:()=>void
}
type PropsType = MapStatePropsType & MapDispatchPropsType
class AuthContainer extends React.Component<PropsType> {
	onOut = () =>{
		this.props.LogoutThunk();
	}
	render () {
		return <Auth {...this.props} onOut={this.onOut}/>
	}
}
let mapStateToProps = (state: AppStateType) =>({
	login: state.auth.login,
	isAuth: state.auth.isAuth,
	activeUser: state.auth.activeUser,
})

export default connect(mapStateToProps, {LogoutThunk})(AuthContainer);