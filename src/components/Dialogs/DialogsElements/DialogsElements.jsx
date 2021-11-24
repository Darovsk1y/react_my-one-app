import DialogItem from "./DialogItem/DialogItem";

let dialogsData = [
  {
    id: "1",
    name: "Raketa",
    image: "http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",
    text: "Hellow dear friend!",
  },
  {
    id: "2",
    name: "Mivina Mivina",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7K1e0KwkmpYpPFLGFYejuBWA-6YMCLsrn-_Rs4MUchBIITZpVBjlAz_kJaUdUvcBp18I&usqp=CAU",
    text: "Hi. I am the best of the best paladin!",
  },
  {
    id: "3",
    name: "Lola Flex",
    image:
      "https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates ",
  },
  {
    id: "4",
    name: "Ruslan Prist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ODnhtS6QYwUbinYjsHNdfadmy7KWSJ9vNEqa_W1QWIXxSwDmo175xTs8Kaicb_e7BaQ&usqp=CAU",
    text: "I heal in raids, inexpensive! Fast healing without problems! Help and leveling characters!",
  },
];
let dialogsElements = dialogsData.map((dialog) => {
  return (
    <DialogItem
      key={dialog.id}
      id={dialog.id}
      name={dialog.name}
      image={dialog.image}
      text={dialog.text}
    />
  );
});
export default dialogsElements;
