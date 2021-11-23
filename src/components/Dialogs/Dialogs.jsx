import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import s from "./Dialogs.module.css";
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsList}>
        <div className={s.dialogsItem}>
          <NavLink to="/dialogs/1" className={s.link}>
            <div className={s.dialog}></div>
          </NavLink>
          <Dialog
            name="Raketa"
            image="http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg"
            text="Hellow friend!"
          />
        </div>
        <div className={s.dialogsItem}>
          <NavLink to="/dialogs/2" className={s.link}>
            <div className={s.dialog}></div>
          </NavLink>
		  <Dialog
            name="Mivina Mivina"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7K1e0KwkmpYpPFLGFYejuBWA-6YMCLsrn-_Rs4MUchBIITZpVBjlAz_kJaUdUvcBp18I&usqp=CAU"
            text="Hi. I am the best of the best paladin!"
          />
        </div>
        <div className={s.dialogsItem}>
          <NavLink to="/dialogs/3" className={s.link}>
            <div className={s.dialog}></div>
          </NavLink>
		  <Dialog
            name="Lola Flex"
            image="https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates "
          />
        </div>
        <div className={s.dialogsItem}>
          <NavLink to="/dialogs/4" className={s.link}>
            <div className={s.dialog}></div>
          </NavLink>
		  <Dialog
            name="Ruslan Prist"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ODnhtS6QYwUbinYjsHNdfadmy7KWSJ9vNEqa_W1QWIXxSwDmo175xTs8Kaicb_e7BaQ&usqp=CAU"
            text="I heal in raids, inexpensive! Fast healing without problems! Help and leveling characters!"
          />
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla.
          Error magni ipsa inventore consectetur rerum, accusamus molestias sit
          quisquam distinctio eius obcaecati debitis tempore modi animi
          consequuntur dicta quo.
        </div>
        <div className={s.message}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla.{" "}
        </div>
        <div className={s.message}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nulla.
          Error magni ipsa inventore consectetur rerum, accusamus molestias sit
          quisquam distinctio eius obcaecati debitis tempore modi animi
          consequuntur dicta quo Error magni ipsa inventore consectetur rerum,
          accusamus molestias sit quisquam distinctio eius obcaecati debitis
          tempore modi animi consequuntur dicta quo.
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
