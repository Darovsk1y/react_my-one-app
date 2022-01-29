import { render, screen } from '@testing-library/react';
import GlobalApp from './App';
import ReactDOM from 'react-dom';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

//todo Проверка на Рэндер
test('renders without crashing', ()=>{
	const div = document.createElement('div');
	ReactDOM.render(<GlobalApp />, div);
	ReactDOM.unmountComponentAtNode(div);
});
/* test('renders learn react link', () => {
  render(<GlobalApp />);
  const linkElement = screen.getByRole(/main/i);
  expect(linkElement).toBeInTheDocument();
}); */
