import s from './GlobalError.module.css';
//todo это попап для ошибки
type Props = {
	globalError:string
	clearError:()=>void
}
const GlobalError:React.FC<Props> = ({globalError, clearError}) => {
  return (
	<div className={s.popup}>
	<div className={s.popupContent}>
	  <div className={s.popupBody}>
		<div className={s.popupBlock}>{globalError}</div>
		<div className={s.popupClose} onClick={clearError}></div>
	  </div>
	</div>
  </div>
  );
};

export default GlobalError;