import React from 'react'
import ReactDOM from 'react-dom'
import { App, Title, Input, Button } from './App'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('exists child components', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(Title).length).toBe(1)
  expect(wrapper.find(Input).length).toBe(1)
  expect(wrapper.find(Button).length).toBe(1)
})

it('when change event is fired, the callback function is used.', () => {
  const handleChangeSpy = jest.fn();
  const wrapper = shallow(<Input handleChange={handleChangeSpy} />);
  const event = { target: { value: 'XXX' } };
  wrapper.find('input').simulate('change', event);
  expect(handleChangeSpy).toHaveBeenCalledWith('XXX');
});

it('show text', () => {
  const wrapper = shallow(<Title text={'React'}/>)
  expect(wrapper.text()).toBe('Hello React')
  wrapper.setProps({text: 'World'})
  expect(wrapper.text()).toBe('Hello World')
})

