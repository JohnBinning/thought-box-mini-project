import React from 'react'
import { ThoughtCard } from '../thoughtCard/thoughtCard.js'


export const ThoughtList =( { thoughtList } ) => {
  const cardList = thoughtList.map((thought) => {
    if (thoughtList.length == 0) {
      return(
        <div></div>
      )
    }
    return(
      <ThoughtCard thought={thought}/>
    )
  })

  return (
    <div className='thoughtlist'>
      {cardList}
    </div>
  )
}
