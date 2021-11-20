import s from "./Post.module.css";
const Post = () => {
  return (
    <div className={s.post}>
      <div className={s.avatar}>
        <img
          src="http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg"
          alt=""
        ></img>
      </div>
      <div className={s.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
        nostrum consequatur dignissimos reiciendis dicta hic commodi, voluptatum
        sunt maxime, fugiat laboriosam nulla illum aliquam explicabo libero nisi
        praesentium illo ipsa!
      </div>
    </div>
  );
};
export default Post;