/* Грязная компанента */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
	const navigate = useNavigate();
	
	// заменяет componentDidMount
	const search = useLocation().search
	const [searchParams] = useSearchParams();
	type ParamURL = {
		term?:string
		friend?:string
		page?:string
	}
	useEffect(()=>{
		// 1) получение параметров из адресной строки
		const paramURL = Object.fromEntries([...searchParams]);
		let actualPage = activePage;
		
		if(!!paramURL.page) actualPage= Number(paramURL.page);
		let actualFilter = filter;
		if(!!paramURL.term) actualFilter= {...actualFilter, term: paramURL.term}
		let friend = paramURL.friend==="true" ? true : paramURL.friend==="false" ?
		false : null;
		if(!!paramURL.friend) actualFilter= { ...actualFilter, friend: friend}
		dispatch(getUsersThunk(actualPage, pageSize, actualFilter))
	}, [])

	//todo это синхронизация адресной строки c изменениями в UI
	useEffect(()=>{
		// 2) формируем обьект значений будущей адресной строки если есть знач. в стэйте
		const query:ParamURL = {}
		if(!!filter.term) query.term = filter.term
		if(filter.friend !==null) query.friend = String(filter.friend)
		if(activePage !==1) query.page = String(activePage)

		// 3) формируем обьект с методом передачи в URL
		let newUrl = new URLSearchParams();
		  for (const [key, value] of Object.entries(query)) {
			newUrl.append(key, value)
		  }
		
		// 4) задание адресной строки из стэйт параметров если они есть
		navigate({
			pathname: '/users',
			//search: `?term=${filter.term}&friend=${filter.friend}&page=${activePage}`,
			search: newUrl.toString(),
		})
	}, [filter, activePage])
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
