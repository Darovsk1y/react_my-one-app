export const mapItemsUpdateHelper = (items, objPropName, itemId, newObjectProps) => {
	//где ищем/какок св-во ищем/с чем должно совпасть/что добавить в обьект если совпало
	//todo это универсальная ф-ия для уменьшения логики
	//она найдет в нужном обьекте нужный ключ и заменит в нем значение на новое
	return items.map(u => {
		if ( u[objPropName] === itemId){
			return {...u, ...newObjectProps}
		}
		return u;
	})
}