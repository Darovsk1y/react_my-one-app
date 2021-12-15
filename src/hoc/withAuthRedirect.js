import React from "react";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>({
	isAuth: state.auth.isAuth,
})

export const withAuthRedirect = (Component) => {

	class RedirectComponent extends React.Component {
		render(){
			if(!this.props.isAuth) return <Navigate to={"/login"}/>
			return <Component {...this.props}/>
		}
	}
	let ConnectAuthRedirect = connect(mapStateToProps)(RedirectComponent);

	return ConnectAuthRedirect; /* Возвращать она может хоть папу Римского это имя не будет нами использоваться */
}

