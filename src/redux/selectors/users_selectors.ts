import { AppStateType } from "../redux_store";

/* 1-действие 2-имя редюсера 3-имя операции Мой алгоритм */
export const getUsersUsers = (state: AppStateType) => {
	return state.users.users;
}
export const getUsersPageSize = (state: AppStateType) => {
	return state.users.pageSize;
}
export const getUsersTotalUsersCount = (state: AppStateType) => {
	return state.users.totalItemsCount;
}
export const getUsersActivePage = (state: AppStateType) => {
	return state.users.activePage;
}
export const getUsersIsfetching = (state: AppStateType) => {
	return state.users.isfetching;
}
export const getUsersIsDisabled = (state: AppStateType) => {
	return state.users.isDisabled;
}
export const getUsersMaxbaselight = (state: AppStateType) => {
	return state.users.maxbaselight;
}
