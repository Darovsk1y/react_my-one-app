import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Col, Layout, Menu, Row } from "antd";
import React, { Suspense } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import FriendsContainer from "./components/Asside/Friends/FriendsContainer";
import Preloader from './components/global/Preloader/preloader';
// import s from './AntBody.style.module.css';
import Auth from "./components/Header/Auth/Auth";

const Profile = React.lazy(() => import('./components/UserMain/Profile'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Muzic = React.lazy(() => import('./components/Muzic/Muzic'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const UsersPage = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));
//todo компанента на AntDesignimport Header from './components/Header/Header';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const AntBody = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo"></div>
		<Row>
			<Col span={3} >
				<Avatar size="large" src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/fh/FHSCSCG9CXOC1462229977849.png"/>
			</Col>
			<Col span={15}>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
					<Menu.Item key="1">nav 1</Menu.Item>
					<Menu.Item key="2">nav 2</Menu.Item>
					<Menu.Item key="3">nav 3</Menu.Item>
				</Menu>
			</Col>
			<Col span={6}> 
				<Auth />
			</Col>
		</Row>
		
        
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: "0px 0" }}>
          <Sider className="site-layout-background" width={280}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}>
			
              <SubMenu key="sub1" icon={<UserOutlined />} title="PROFILE">
                <Menu.Item key="1">
					<Link to="/profile">Profile</Link>
					</Menu.Item>
                <Menu.Item key="2">
					<Link to="/dialogs">Messages</Link>
					</Menu.Item>
                <Menu.Item key="3">
					Photos
				</Menu.Item>
                <Menu.Item key="4">
					<Link to="/settings">Settings</Link>
				</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="News">
                <Menu.Item key="5">
					<Link to="/news">News</Link>
				</Menu.Item>
                <Menu.Item key="6">
					<Link to="/music">Muzic</Link>
					</Menu.Item>
                <Menu.Item key="7">
				<Link to="/chat">Chat</Link>
					</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="Find users">
                <Menu.Item key="9">
					<Link to="/users">Find users</Link>
					</Menu.Item>
              </SubMenu>

			  <FriendsContainer />
            </Menu>
			
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>

			<Suspense fallback={<Preloader/>}>
					<Routes>
						<Route path='/' element={<Navigate to={'/profile'}/>} />
						<Route path='/profile/*' element={<Profile />} />
						<Route path='/dialogs/*' element={<DialogsContainer />} />
						<Route path='/news/*' element={<News />} />
						<Route path='/music/*' element={<Muzic />} />
						<Route path='/settings/*' element={<Settings />} />
						<Route path='/users/*' element={//@ts-ignore  //! Незнаю как прокинуть пропсы
						<UsersPage pageTitle={"Sumuray test props"}/>} />
						<Route path='/login/*' element={<LoginContainer/>} />
						<Route path='/chat/*' element={<ChatPage/>} />
					</Routes>
				</Suspense>

		  </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};
export default AntBody;
