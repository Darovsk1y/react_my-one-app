import s from "./UserInfo.module.css";
const UserInfo = (props) => {
  return (
    <div className={s.info}>
      <div className={s.line}>
        <div className={s.param}>name</div>
        <div className={s.answer}>{props.profile.fullName}</div>
      </div>
      <div className={s.line}>
        <div className={s.param}>city</div>
        <div className={s.answer}>{props.profile.city ? props.profile.city : "Gotham City"}</div>
      </div>
	  	{/* Вывод только если параметр задан */}
	  {props.profile.aboutMe ? (
		<div className={s.line}>
			<div className={s.param}>About Me</div>
			<div className={s.answer}>{props.profile.aboutMe}</div>
		</div>
	  ) : ''}
	  {props.profile.contacts.facebook ? (
			<div className={s.line}>
				<div className={s.param}>facebook</div>
				<div className={s.answer}><a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></div>
		 	 </div>
	  ) : ''
	  }
	  {props.profile.contacts.website ? (
			<div className={s.line}>
				<div className={s.param}>website</div>
				<div className={s.answer}><a href={props.profile.contacts.website}>{props.profile.contacts.website}</a></div>
		 	 </div>
	  ) : ''
	  }
	  {props.profile.contacts.vk ? (
			<div className={s.line}>
				<div className={s.param}>vk</div>
				<div className={s.answer}><a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></div>
		 	 </div>
	  ) : ''
	  }
	  {props.profile.contacts.twitter ? (
			<div className={s.line}>
				<div className={s.param}>twitter</div>
				<div className={s.answer}><a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></div>
		 	 </div>
	  ) : ''
	  }
	  {props.profile.contacts.instagram ? (
			<div className={s.line}>
				<div className={s.param}>instagram</div>
				<div className={s.answer}><a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></div>
		 	 </div>
	  ) : ''
	  }
	  {props.profile.contacts.youtube ? (
			<div className={s.line}>
				<div className={s.param}>youtube</div>
				<div className={s.answer}><a href={props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a></div>
		 	 </div>
	  ) : ''
	  }
	  {props.profile.contacts.github ? (
			<div className={s.line}>
				<div className={s.param}>github</div>
				<div className={s.answer}><a href={props.profile.contacts.github}>{props.profile.contacts.github}</a></div>
		 	 </div>
	  ) : ''
	  }
	  {props.profile.contacts.mainLink ? (
			<div className={s.line}>
				<div className={s.param}>mainLink</div>
				<div className={s.answer}><a href={props.profile.contacts.mainLink}>{props.profile.contacts.mainLink}</a></div>
		 	 </div>
	  ) : ''
	  }
	  	<div className={s.line}>
			<div className={s.param}>Looking for a job</div>
			{props.profile.lookingForAJob ? (
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
			<div className={s.answer}>{props.profile.lookingForAJobDescription}</div>
		</div>
    </div>
  );
};
export default UserInfo;