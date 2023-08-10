import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../logo192.png"
export const Card = ({movie}) => {

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
    <Link to={`/movie/${movie.id}`}>
      {/* <h1>{movie.poster_path}</h1> */}
      
        <img className="rounded-t-lg" src={movie.poster_path===""? {Logo}:`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
    </Link>
    <div className="p-5">
        <Link to={`/movie/${movie.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.original_title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
        
    </div>
</div>
  )
}
