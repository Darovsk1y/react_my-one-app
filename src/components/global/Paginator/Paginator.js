import s from "./Paginator.module.css";
import arrow from "../../../assets/sliderArr.png";
export const Paginator = ({activePage, totalItemsCount, pageSize, clickActivePage, maxbaselight = 10}) => {
	let pagesCount = Math.ceil(totalItemsCount/pageSize);

	const base1 = Math.ceil(maxbaselight/2);
	let t_start = 1
	let t_finish = 20
	let pagesOrderingStart = (t_start) =>{
		/* считаем точку начала цикла относительно активоной страницы */
		activePage <=base1 ? t_start = 1 : t_start = activePage - base1;
		return t_start;
	}
	let pagesOrderingFinish = (t_finish) =>{
		/* считаем конечную точку цикла в зависимости от активной страницы */
		/* считаем номер конечной страницы и исходим из него */
		if(activePage <= pagesCount - base1){
			activePage <=base1 ? t_finish = maxbaselight : t_finish = activePage + base1
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
	console.log(pages.length);
	return (
	<div className={s.paginnation}>
		{activePage >1 ?
		<button type="button" className={s.button +" "+ s.buttonLeft}  onClick={() =>{clickActivePage(activePage-1)}}>
			<img src={arrow} alt=""/>
		</button>
		: null
		}
		{pages.map(page => {
			return <span className={activePage === page ? s.paginpage +" "+ s.active : s.paginpage} key={page} onClick={() =>{clickActivePage(page)}}>{page}</span>
		})}
		{activePage < pagesCount ?
		<button type="button" className={s.button}  onClick={() =>{clickActivePage(activePage+1)}}>
			<img src={arrow} alt=""/>
		</button>
		: null
		}
	</div>
	)
};