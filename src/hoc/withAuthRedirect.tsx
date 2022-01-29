import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../redux/redux_store';

let mapStateToProps = (state:AppStateType) =>({
	isAuth: state.auth.isAuth,
}) as mapStateType
type mapStateType = {
	isAuth:boolean
}
type dispatchPropsType = {
	
}
export function withAuthRedirect<WCP>(Component:React.ComponentType<WCP>) {
/* HOC оборачивает переданную в него кампаненту и выплевывает обратно */
	const RedirectComponent:React.FC<mapStateType & dispatchPropsType> = (props) => {
		//todo Димыч не заметил как удалил WCP из входящих пропсов поэтому работает
			let {isAuth, ...restProps} = props
			if(!isAuth) return <Navigate to={"/login"}/>
			return <Component {...restProps as WCP}/>
	}
	let ConnectAuthRedirect = connect<mapStateType,dispatchPropsType,WCP,AppStateType>
	(mapStateToProps)(RedirectComponent)

	return ConnectAuthRedirect; /* Возвращать она может хоть папу Римского это имя не будет нами использоваться */
}

