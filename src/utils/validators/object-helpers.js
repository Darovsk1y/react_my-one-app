export const mapItemsUpdateHelper = (items, keys, itemId, newObjectProps) => {
	//откуда/кому/что/и что дальше применить
	return items.map(u => {
		if ( u[keys] === itemId){
			return {...u, ...newObjectProps}
		}
		return u;
	})
}