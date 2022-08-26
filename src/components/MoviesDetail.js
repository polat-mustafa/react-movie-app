import React from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import { Button } from 'antd';

const MoviesDetail = ({movies}) => {

    const {id} = useParams()
    const navigate = useNavigate()

    const movie = movies.find(movie => movie.id === id)

    console.log(movie)
  return (
    <div>
        <h1>{movie.title}</h1>
        <img src={movie.image} alt={movie.title} />
        <p> İmdb rating: {movie.imDbRating}</p>
        <p> Year: {movie.year}</p>
        <p>Movie crew: {movie.crew}</p>
        <Button type='primary'>Watch</Button>
        <Button type='primary' onClick={() => navigate(-1)}>Go back movies</Button>
    </div>
  )
}

export default MoviesDetail