import React from "react";
import User from "./User";
import { connect } from 'react-redux';
import { getProfileThusk, setStatusThusk, updateStatusThusk } from './../../redux/profile_reducer';
import { useMatch } from "react-router";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from "redux";

/* Теперь это классовая компанента */
class UserContainer extends React.Component {
	componentDidMount(){
		let userId = this.props.match ? this.props.match.params.userId : this.props.auth.activeUser.userId;/* this.props.auth.activeUser.userId работает но с ошибкой. данные из пропс поздно приходят */
		this.props.getProfileThusk(userId);
		this.props.setStatusThusk(userId);
	}
	render () {
		/* debugger */
		return (
			<User profile={this.props.profile}  
			updateStatusThusk={this.props.updateStatusThusk}
			status={this.props.status}
			/>
		  )
		}
}
let mapStateToProps = (state) =>({
	profile: state.profile.profile,
	auth: state.auth,/*  id active*/
	status: state.profile.status,
})

const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId");
	return (
		<UserContainer {...props} match={match}/>
	)
}
export default compose( connect (mapStateToProps, {getProfileThusk, setStatusThusk, updateStatusThusk})
		,withAuthRedirect)(ProfileMatch);