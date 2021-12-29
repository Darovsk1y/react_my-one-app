import s from "./Paginator.module.css";
export const Paginator = ({activePage, totalUsersCount, pageSize, clickActivePage}) => {
	let pagesCount = Math.ceil(totalUsersCount/pageSize);
	let t_start = 1
	let t_finish = 20
	let pagesOrderingStart = (t_start) =>{
		/* считаем точку начала цикла относительно активоной страницы */
		activePage <=10 ? t_start = 1 : t_start = activePage - 10;
		return t_start;
	}
	let pagesOrderingFinish = (t_finish) =>{
		/* считаем конечную точку цикла в зависимости от активной страницы */
		/* считаем номер конечной страницы и исходим из него */
		if(activePage <= pagesCount - 10){
			activePage <=10 ? t_finish = 20 : t_finish = activePage + 10
		} else {
			t_finish = pagesCount
		}
		return t_finish;
	}
	//todo Формирование массива страниц
	let tс_start = pagesOrderingStart(t_start);
	let tс_finish = pagesOrderingFinish(t_finish);
	let pages = [];
	for(tс_start; tс_start <=tс_finish; tс_start++){
	pages.push(tс_start);
	}
	return (
	<div className={s.paginnation}>
		{pages.map(page => {
			return <span className={activePage === page ? s.paginpage +" "+ s.active : s.paginpage} onClick={() =>{clickActivePage(page)}}>{page}</span>
		})}
	</div>
	)
};