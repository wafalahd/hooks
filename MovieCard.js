import React from 'react'

const MovieCard = ({movie}) =>{
  return (
    <div>
        <img src ={movie.afficheURL} alt ={movie.title}/>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <p>{movie.rating}</p>
    </div>
  )
}

export default MovieCard