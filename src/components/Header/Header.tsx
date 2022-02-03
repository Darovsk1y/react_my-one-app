import s from "./Header.module.css";
import Auth from "./Auth/Auth";
const HeaderMy = () => {
  return (
    <div className={s.header}>
		<div className={s.headerLogoBody}>
			<img className={s.headerLogo}
			src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/fh/FHSCSCG9CXOC1462229977849.png"
			alt=""></img>
		</div>
      
		<Auth />
    </div>
  );
};

export default HeaderMy;
