import s from "./../Header.module.css";
import { NavLink } from 'react-router-dom';
import { Avatar, Button, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAuthActiveUser, getAuthIsAuth, getAuthLogin } from "../../../redux/selectors/auth_selectors";
import { LogoutThunk } from "../../../redux/auth_reducer";
import { UserOutlined } from '@ant-design/icons';

const Auth:React.FC = () => {
	const login = useSelector(getAuthLogin);
	const isAuth = useSelector(getAuthIsAuth);
	const activeUser = useSelector(getAuthActiveUser);
	const dispatch = useDispatch();
	const onOut = ()=> dispatch(LogoutThunk())
  return (
    <div >
		{isAuth ? 
		<Row>
			<Col span={5}>
				<Button type='primary' className={s.logout} onClick={onOut}>Log out</Button>
			</Col>
			<Col span={3}>
				{activeUser ?
					<Avatar size="large" src={activeUser.photos.large}/>
					:  <Avatar size="large" icon={<UserOutlined />} /> 
				}
			</Col>
			<Col span={10}>
				<NavLink to ={"/profile"} className={s.login}>User: {login}</NavLink>
			</Col>
		</Row>
		 : <Button>
 				<NavLink to={"/login"}>Login Up</NavLink>
		 </Button>
		}
    </div>
  );
};
export default Auth;
{/* <button className={s.logout} onClick={props.onOut}>Log out</button> */}
{/* <NavLink to ={"/profile"} className={s.avatarBlock}>
					<img src={activeUser.photos.large ? activeUser.photos.large : ""} alt="Avatar" className={s.avatarImage}/>
				</NavLink> */}
				//! может убрать колонки? ломается и так и так