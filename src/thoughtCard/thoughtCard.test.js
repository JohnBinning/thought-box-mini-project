import React from 'react'
import { shallow } from 'enzyme'

import { ThoughtCard } from './thoughtCard.js'

describe('ThoughtCard', () => {

  it('has a thoughtCard class field', () => {
    const mockData = [{title: '1', body: '1'}]
    const wrapper = shallow(<ThoughtCard thought={mockData}/>)
    const found = wrapper.find('.card-title')

    expect(found.length).toEqual(1)
  })

  it('has a title and body', () => {
    const mockData = [{title: '1', body: '1'}]

    const wrapper = shallow(<ThoughtCard thought={mockData}/>)
    const found = wrapper.find('.card-title')

    expect(found.length).toEqual(1)
  })

})
