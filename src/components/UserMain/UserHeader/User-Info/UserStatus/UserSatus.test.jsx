/* тренируемся тестировать - тестируем КЛК*/

import { create } from "react-test-renderer";
import UserStatus from './UserSatus';

describe('ProfileStatus component', ()=>{
	//проверка что state существует
	test('status from props should be in the state', ()=>{
		const component = create(<UserStatus status="test-samuray-go"/>);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("test-samuray-go");
	});
	//проверка на существование спана в начале
	test('component should contain span', ()=>{
		const component = create(<UserStatus status="test-samuray-go"/>);
		const instance = component.root;
		let span = instance.findByType("span");
		expect(span).not.toBeNull();
	});
	//проверка на существование input в начале
	test('component should not contain input', ()=>{
		const component = create(<UserStatus status="test-samuray-go"/>);
		const instance = component.root;
		expect(()=>{
			//! input undefyned поэтому проверка на ошибку
			let input = instance.findByType("input");
		}).toThrow();//!Ждали ошибку заранее
	});

	test('span should contain state', ()=>{
		const component = create(<UserStatus status="test-samuray-go"/>);
		const instance = component.root;
		let span = instance.findByType("span");
		expect(span.children[0]).toBe("test-samuray-go");
	});

	test('span should to change inpup on doubleClick', ()=>{
		const component = create(<UserStatus status="test-samuray-go"/>);
		const instance = component.root;
		let span = instance.findByType("span");
		span.props.onDoubleClick();
		let input = instance.findByType("input");
		expect(input.props.value).toBe("test-samuray-go");
	});
	//проверяем что кулбек вызывается
	test('callback should be called', ()=>{
		const mockCallback = jest.fn();
		const component = create(<UserStatus status="test-samuray-go" updateStatusThusk={mockCallback}/> );
		const instance = component.getInstance();
		instance.deActivateEditMode(); //todo вызываем настоящий кулбек а в его методе updateStatusThusk вызываем наш Внутренний тестовый
		//когда сработает настоящий кулбек мы увидим что сработал и этот тестовый
		expect(mockCallback.mock.calls.length).toBe(1);
	});
});