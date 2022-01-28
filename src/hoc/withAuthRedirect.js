import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>({
	isAuth: state.auth.isAuth,
})

export function withAuthRedirect (Component) {
/* HOC оборачивает переданную в него кампаненту и выплевывает обратно */
	function RedirectComponent (props) {
			let {isAuth, ...restProps} = props
			//! проблема с типизацией Navigate, Component не понимает
			if(!isAuth) return <Navigate to={"/login"}/>
			return <Component {...restProps}/>
	}
	//<mapStateToPropsType, {}, WCP, AppStateType>
	let ConnectAuthRedirect = connect(mapStateToProps)(RedirectComponent);

	return ConnectAuthRedirect; /* Возвращать она может хоть папу Римского это имя не будет нами использоваться */
}

