import Post from "./Post";
import s from "./PostsOld.module.css";

/*Данные которые пришли к нам с сервера из БД  */
let postData = [
  {
    id: 1,
    likes: "2",
    name: "Raketa",
    avatar: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
    text: "Hellow friend!",
  },
  {
    id: 2,
    likes: "8",
    name: "Lola Flex",
    avatar:
      "https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates ",
  },
  {
    id: 3,
    likes: "34",
    name: "Fransua Ewently",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbnEIzrjyxxOY0epeMS4hYgqan30wNAZsIQ&usqp=CAU",
    text: `asperiores nobis, temporibus consequatur ipsa incidunt tempore quam deleniti eum quisquam excepturi quis omnis officiis quas officia illum placeat dolorum?`,
  },
];
/* Далее мы преобразовали в элементы массива */
let postElements = postData.map((dialog) => {
  return (
    <Post
      key={dialog.id}
      likes={dialog.likes}
      name={dialog.name}
      avatar={dialog.avatar}
      text={dialog.text}
    />
  );
});

const PostsOld = () => {
  return <div className={s.posts}>{postElements}</div>;
};
export default PostsOld;
