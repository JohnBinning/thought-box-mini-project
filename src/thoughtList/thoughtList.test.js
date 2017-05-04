import React from 'react'
import { shallow, mount } from 'enzyme'

import { ThoughtList } from './thoughtList.js'


describe('ThoughtList', () => {

  it('has a thoughtList class field', () => {
    const mockData = [{title: '1', body: '1'}, {title: '2', body: '2'}]
    const wrapper = shallow(<ThoughtList thoughtList={mockData}/>)
    const found = wrapper.find('.thoughtlist')
    expect(found.length).toEqual(1)
  })

  it('has multiple ThoughtCard class fields', () => {
    const mockData = [{title: '1', body: '1'}, {title: '2', body: '2'}]
    const wrapper = mount(<ThoughtList thoughtList={mockData}/>)
    const found = wrapper.find('.thought-card')

    expect(found.length).toEqual(2)
  })

  //when thoughtList recieves an empty array of thoughts, 0 cards are displayed
  it('when thoughtList recieves an empty array of thoughts, 0 cards are displayed', () => {
    const mockData = []

    const wrapper = mount(<ThoughtList thoughtList={mockData}/>)
    const found = wrapper.find('.thought-card')

    expect(found.length).toEqual(0)
  })
})
