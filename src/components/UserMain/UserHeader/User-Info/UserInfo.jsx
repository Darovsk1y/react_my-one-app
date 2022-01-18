import Contact from "./Contact";
import s from "./UserInfo.module.css";
/* import UserStatus from './UserStatus/UserSatus'; */
import UserStatusWithHooks from './UserStatus/UserSatusWithHooks';

const UserInfo = ({status, profile, updateStatusThusk, isOwner}) => {

  return (
    <div className={s.info}>
      <div className={s.line}>
        <div className={s.param +" "+ s.param_name}>name</div>
        <div className={s.answer +" "+ s.answer_name}>{profile.fullName}</div>
      </div>
	  <UserStatusWithHooks status={status} updateStatusThusk={updateStatusThusk} isOwner={isOwner}/>
      <div className={s.line}>
        <div className={s.param}>city</div>
        <div className={s.answer}>{profile.city ? profile.city : "Gotham City"}</div>
      </div>
		{/* Вывод только если параметр задан */}
		{profile.aboutMe ? (
			<div className={s.line}>
				<div className={s.param}>About Me</div>
				<div className={s.answer}>{profile.aboutMe}</div>
			</div>
		) : ''}
			  	
			<div className={s.line}>
				<div className={s.param}>Looking for a job</div>
				{profile.lookingForAJob ? (
				<div className={s.answer}>
					<img src="https://www.aura.ge/uploads/gantvirtva/didi_smailebi/samili.162.gif" alt="" className={s.iconJob}/>
				</div>
			) : 
			(<div className={s.answer}>
				<img src="https://www.aura.ge/uploads/gantvirtva/didi_smailebi/samili.161.gif" alt="" className={s.iconJob}></img>
			</div>)}
		</div>
	  	<div className={s.line}>
			<div className={s.param}></div>
			<div className={s.answer}>{profile.lookingForAJobDescription}</div>
		</div>
	  <div className={s.param}>contacts: </div>
	  {Object.keys(profile.contacts).map(key => {
		  return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
		})}

    </div>
  );
};
export default UserInfo;