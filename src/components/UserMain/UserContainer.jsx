import React from "react";
import User from "./User";
import { connect } from 'react-redux';
import { getProfileThusk } from './../../redux/profile_reducer';
import { useMatch } from "react-router";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from "redux";

/* Теперь это классовая компанента */
class UserContainer extends React.Component {
	componentDidMount(){
		let userId = this.props.match ? this.props.match.params.userId : "2";/* this.props.auth.activeUser.userId работает но с ошибкой. данные из пропс поздно приходят */
		this.props.getProfileThusk(userId);
	}
	render () {
		return (
			<User profile={this.props.profile}/>
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
export default compose( connect (mapStateToProps, {getProfileThusk})
		,withAuthRedirect)(ProfileMatch);