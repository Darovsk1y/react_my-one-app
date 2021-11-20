
import MainImage from "./MainImage";
import s from "./Main.module.css";
import User from "./User";

const Main = () => {
  return (
    <main className={s.main}>
	<MainImage/>
      <div className={s.body}>
		<User/>
      </div>
    </main>
  );
};
export default Main;