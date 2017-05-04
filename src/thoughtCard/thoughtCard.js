import React from 'react'

export const ThoughtCard = ({thought}) => {
  return (
    <div className="thought-card">
      <p className="card-title">{thought.title}</p>
      <p className='card-body'>{thought.body}</p>
    </div>
  )
}
