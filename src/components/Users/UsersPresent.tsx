/* Грязная компанента */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersActivePage, getUsersFilter, getUsersIsDisabled, 
	getUsersMaxbaselight, getUsersPageSize, getUsersTotalUsersCount, 
	getUsersUsers } from "../../redux/selectors/users_selectors";
import { FilterType, followThunk, getUsersThunk, unfollowThunk } from "../../redux/users_reducer";
import { Paginator } from "../global/Paginator/Paginator";
import User from "./User/User";
import s from "./Users.module.css";
import UsersSearchForm from "./UsersSearchForm";

type PropsType = {}
//! Теперь Грязная Компанента с Хуками!
export const UsersPresent:React.FC<PropsType> = (props) => {
	//todo useSelector хук который принимает селектор
	const activePage = useSelector(getUsersActivePage);
	const totalItemsCount = useSelector(getUsersTotalUsersCount);
	const pageSize = useSelector(getUsersPageSize);
	const maxbaselight = useSelector(getUsersMaxbaselight);
	const users = useSelector(getUsersUsers);
	const isDisabled = useSelector(getUsersIsDisabled);
	const filter = useSelector(getUsersFilter);

	const dispatch = useDispatch();
	// заменяет componentDidMount
	useEffect(()=>{
		dispatch(getUsersThunk(activePage, pageSize, filter))
	}, [])
	//! Теперь мы не прокидываем сюда Кулбеки нужные ей а создаем тут же!
	const onPageChanged = (page:number) =>{
		dispatch(getUsersThunk(page, pageSize, filter))
	}
	const onFilterChanged = (filter:FilterType) =>{
		dispatch(getUsersThunk(1, pageSize, filter))
	}
	const follow = (id:number) => {
		dispatch(followThunk(id))
	}
	const unfollow = (id:number) => {
		dispatch(unfollowThunk(id))
	}

	return (
		<div className={s.users}>
		  <div className={s.body}>
			  <UsersSearchForm onFilterChanged={onFilterChanged} />
			  <Paginator 
			  	activePage={activePage}
				totalItemsCount={totalItemsCount}
				pageSize={pageSize}
				clickActivePage={onPageChanged}
				maxbaselight={maxbaselight}
			  />
			<ul className={s.userList}>
			  {
				  users.map((u) => {
					return <User
					  key={u.id}
					  id={u.id}
					  name={u.name}
					  status={u.status}
					  avatar={u.photos.small}
					  isfollow={u.followed}
					  link={"/profile/" + u.id}
					  isDisabled={isDisabled}
					  unfollowThunk={unfollow}
					  followThunk={follow}
					/>
				  })
			  }
			</ul>
			<button type="button" className={s.button}>
			  Load more
			</button>
		  </div>
		</div>
	  );
	}
//export default UsersPresent;
