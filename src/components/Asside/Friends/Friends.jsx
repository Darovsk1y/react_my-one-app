import s from "./Friends.module.css";
import Friend from './Friend/Friend';


const Friends = (props) => {
	let frendsItems = props.data.map( (friend) => {
		return (
			<Friend key={friend.id}
					image={friend.image}
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
