
import MainImage from "./MainImage";
import "./Main.css";
import User from "./User";

const Main = () => {
  return (
    <main className="main">
	<MainImage/>
      <div className="main__body">
		<User/>
      </div>
    </main>
  );
};
export default Main;