import Post from "./Post";
import s from "./PostsOld.module.css";
const PostsOld = () => {
  return (
	<div className={s.posts}>
	<Post 
	likes="2"
	name="Raketa"
	avatar="http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg"
	text="Hellow friend!"/>
	<Post 
	likes="8"
	name="Liza"
	avatar="https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png"
	text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates "/>
	<Post 
	likes="34"
	name="Friend"
	avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbnEIzrjyxxOY0epeMS4hYgqan30wNAZsIQ&usqp=CAU"
	text="asperiores nobis, temporibus consequatur ipsa incidunt tempore quam deleniti eum quisquam excepturi quis omnis officiis quas officia illum placeat dolorum?"/>
	</div>
  );
};
export default PostsOld;