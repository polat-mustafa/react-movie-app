import React from 'react'

const Movies = ({movie}) => {


  return (
    <div>
        <h1>{movie.title}</h1>
        <img src={movie.image} alt={movie.title} />
    </div>
  )
}

export default Movies