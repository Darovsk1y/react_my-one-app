import s from "./Friends.module.css";
import Friend from './Friend/Friend';
import { FriendType } from "../../../types/types";

type Props = {
	friends:Array<FriendType>
}
const Friends = (props:Props) => {
	let frendsItems = props.friends.map( (friend) => {
		return (
			//! Тип "string | null" не может быть назначен для типа "string" пробуем вернуть туда undefined
			<Friend key={friend.id}
					image={friend.image ? friend.image : undefined}
					name={friend.name}
					online={friend.online}
			/>
		);
	});
  return (
    <div className={s.body}>
      <div className={s.title}>Friends</div>
      <ul className={s.list}>{frendsItems}</ul>
    </div>
  );
};
export default Friends;
