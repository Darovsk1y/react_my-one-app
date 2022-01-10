import React from "react";
import User from "./User";
import { connect } from 'react-redux';
import { getProfileThusk, setStatusThusk, updateStatusThusk } from './../../redux/profile_reducer';
import { useMatch } from "react-router";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from "redux";

/* Теперь это классовая компанента */
class UserContainer extends React.Component {
	refreshProfile(){
		let userId = this.props.match ? this.props.match.params.userId : this.props.auth.id;
		/* this.props.auth.activeUser.userId работает но с ошибкой. данные из пропс поздно приходят */
		this.props.getProfileThusk(userId);
		this.props.setStatusThusk(userId);
	}
	componentDidMount(){
		this.refreshProfile();
		let isOwner;
	}
	componentDidUpdate(prevProps, prevState, snapshot){
		if(this.props.match && this.props.match.params.userId !== prevProps.match.params.userId){
			this.refreshProfile();
		} else if(!this.props.match && this.props.match !== prevProps.match){
			this.refreshProfile();
		}
	}
	
	render () {

		if(this.props.profile){
			if(this.props.auth.id == this.props.profile.userId){
				this.isOwner = true
			}else{
				this.isOwner = false
			}
		}

		return (
			<User profile={this.props.profile}  
			updateStatusThusk={this.props.updateStatusThusk}
			status={this.props.status}
			isOwner={this.isOwner}
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