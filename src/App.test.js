import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'

it('renders App with className app', () => {
  const wrapper = shallow(<App />)
  const found = wrapper.find('.app')

  expect(found.length).toBe(1)
})

it('initial state starts with an empty array', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.state().thoughts).toEqual([])
})

it('having 2 thoughts in state should mean there are two thoughtCards', () => {
  const mockData = [{title: '1', body: '1'}, {title: '2', body: '2'}]
  const wrapper = mount(<App />)
  wrapper.setState({
    thoughts: mockData
  })
  const found = wrapper.find('.thought-card')

  expect(wrapper.state().thoughts).toEqual(mockData)
  expect(found.length).toBe(2)
})

it('user can add a new thought which adds it to state and is also displayed on the screen', () => {
  const wrapper = mount(<App />)
  const inputTitle = wrapper.find('input').first()
  const inputBody = wrapper.find('input').last()
  const button = wrapper.find('button')
  const resultState = {
    thoughts: [{title: 'yep', id: 0, body: 'of course'}]
  }

  inputTitle.simulate('change', {target: {value: 'yep'}})
  inputBody.simulate('change', {target: {value: 'of course'}})
  button.simulate('click')
  const found = wrapper.find('.thought-card')

  expect(wrapper.state()).toEqual(resultState)
  expect(found.length).toBe(1)
})
