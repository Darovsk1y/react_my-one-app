import s from "./Dialog.module.css";
type Props ={
	name:string
	image:string
	text:string
}
const Dialog = (props:Props) => {
  return (
    <div className={s.dialog}>
      <div className={s.row}>
        <div className={s.avatar}>
          <a href="#/">
            <img src={props.image} alt=""></img>
          </a>
        </div>
        <div className={s.block}>
          <div className={s.name}>{props.name}</div>
          <div className={s.text}>{props.text}</div>
        </div>
      </div>
    </div>
  );
};
export default Dialog;