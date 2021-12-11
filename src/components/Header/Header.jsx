import s from "./Header.module.css";
import AuthContainer from './Auth/AuthContainer';
const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://bnetcmsus-a.akamaihd.net/cms/template_resource/fh/FHSCSCG9CXOC1462229977849.png"
        alt=""></img>
		<AuthContainer />
    </header>
  );
};

export default Header;
