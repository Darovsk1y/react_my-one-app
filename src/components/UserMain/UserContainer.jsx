import React from "react";
import axios from "axios";
import User from "./User";
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profile_reducer';
import { useMatch } from "react-router";


/* Теперь это классовая компанента */
class UserContainer extends React.Component {
	componentDidMount(){
		let userId = this.props.match ? this.props.match.params.userId : "2";/* this.props.auth.activeUser.userId работает но с ошибкой. данные из пропс поздно приходят */
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
		.then( response =>{
			this.props.setUserProfile(response.data);
		})
	}

	render () {
		return (
			<User {...this.props}/>
		  )
		}
}
let mapStateToProps = (state) =>({
	profile: state.profile.profile,
	auth: state.auth,/*  id active*/
})

const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId");
	return (
		<UserContainer {...props} match={match} />
	)
}

export default connect (mapStateToProps, {setUserProfile}) (ProfileMatch);