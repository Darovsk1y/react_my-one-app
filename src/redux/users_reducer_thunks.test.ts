import { ApiResponseType, ResultCodeEnum } from "../api/api";
import { followAPI } from "../api/followAPI";
import { actions, followThunk, unfollowThunk } from "./users_reducer";
//todo Unit Test Thunks
/* Протестировать санку значит удостовериться что она сделала 
диспатч с правильным экшеном, или несколько диспатчей с правильными экшенами
с учетом того что наша заглушка Mock вернула правильные ожидаемые данные */
/* нам нужно создать и тесктовый фейковый Диспатч. тк. мы хотим что бы
логка тестировалась изолированно а экшен не передавался во все редюсеры
настоящий диспатч использовать нельзя */

//подменяем API своей фукцией вот так
jest.mock("../api/followAPI");
//это уже не настоящая followAPI
const followAPIMock = followAPI as jest.Mocked<typeof followAPI>;
//с сервера ответа не будет поэтому имитируем правильный ответ с сервера
const resultSuccess:ApiResponseType = { 
	data: {},
	messages: [],
	resultCode: ResultCodeEnum.Success
}
//todo вынесение данных
// это типа наш Фэйковый Диспатч
const dispatchMock = jest.fn();
// это типа наш Фэйковый Стэйт, нужен как заглушка для вызова Санки
const getStateMock = jest.fn();
//чистим перед каждым вызовом
beforeEach(()=>{
	dispatchMock.mockClear();
	getStateMock.mockClear();
});

test("dispatch Follow thunk Success", async()=>{
	const thunk = followThunk(1);

	//фейковый followAPIMock если у тебя вызовут followApi возвращай ...
	followAPIMock.followApi.mockReturnValue(Promise.resolve(resultSuccess));

	await thunk(dispatchMock, getStateMock, {});
	
	//мы хотим знать сколько раз сработал Диспатч
	expect(dispatchMock).toBeCalledTimes(3);
	//проверяем что диспатчилось
	expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggelFollowDisable(true, 1));
	expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.follow(1));
	expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggelFollowDisable(false, 1));
});

// иммитируем ошибку ответ с сервера
const resultError:ApiResponseType = { 
	data: {},
	messages: ['ddd'],
	resultCode: ResultCodeEnum.Error
}

test("dispatch Follow thunk Error", async()=>{
	const thunk = followThunk(1);

	followAPIMock.followApi.mockReturnValue(Promise.resolve(resultError));

	await thunk(dispatchMock, getStateMock, {});
	
	//мы хотим знать сколько раз сработал Диспатч
	expect(dispatchMock).toBeCalledTimes(2);
});

test("dispatch unfollowThunk Success", async()=>{
	const thunk = unfollowThunk(2);

	followAPIMock.unfollowApi.mockReturnValue(Promise.resolve(resultSuccess));

	await thunk(dispatchMock, getStateMock, {});

	expect(dispatchMock).toBeCalledTimes(3);
	expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggelFollowDisable(true, 2));
	expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollow(2));
	expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggelFollowDisable(false, 2));
});