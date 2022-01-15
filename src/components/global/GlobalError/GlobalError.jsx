import s from './GlobalError.module.css';
//todo это попап для ошибки
const GlobalError = ({globalError, clearError}) => {
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