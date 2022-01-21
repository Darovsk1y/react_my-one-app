import s from "./UserInfo.module.css";
type PropsType = {
	contactTitle: string
	contactValue: string
}
const Contact: React.FC<PropsType> = ({contactTitle, contactValue}) => {
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