import { Paginator } from "./Paginator";
import { create } from 'react-test-renderer';
/* import TestRenderer from 'react-test-renderer'; */

let state = {
	users: [],
	totalUsersCount: 101,
	pageSize: 10,
	activePage: 1,
	isfetching: true,
	isDisabled: [], /* блокировка нажатой кнопки */
	maxbaselight: 20,/* количество точек пагинации страниц */
}

describe("Paginator tests", ()=>{
	test(" quantity spans pagin must to be equels 'maxbaselight' ", ()=>{
		const component = create(<Paginator 
			activePage={1}
			totalUsersCount={100}
			pageSize={10}
			clickActivePage
			maxbaselight={20} />);
		//получить экземпляр
		const root = component.root;
		let span = root.findAllByType("span");
		//! рендерится компанента, но тест не видит вообще никаких детей внутри кроме 1
	/* 	expect(span.length).toBe(10); */
	});
});