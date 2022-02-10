import s from "./Friends.module.css";
import Friend from './Friend/Friend';
import { FriendType } from "../../../types/types";

type Props = {
	friends:Array<FriendType>
}
const Friends = (props:Props) => {
	let frendsItems = props.friends.slice(0,5).map( (friend) => {
		return (
			//! Тип "string | null" не может быть назначен для типа "string" пробуем вернуть туда undefined
			<Friend key={friend.id}
					image={friend.photos.small ? friend.photos.small :
						 'https://i0.wp.com/slovami.net/wp-content/uploads/2018/04/1-36-1024x1024.jpg'}
					name={friend.name}
					followed={friend.followed}
					id={friend.id}
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
