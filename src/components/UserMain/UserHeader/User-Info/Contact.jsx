import s from "./UserInfo.module.css";

const Contact = ({contactTitle, contactValue}) => {
  return (
		<div className=''>
			{contactValue ? 
			<div className={s.line}>
				<div className={s.param}>{contactTitle}</div>
				<a href={contactValue} className={s.answer}>{contactValue}</a>
			</div> 
			: ""}
		</div>
  )
};
export default Contact;