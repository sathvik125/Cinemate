import { Route,Routes } from "react-router-dom";
import React from 'react'
import { MovieList,MovieDetail,Search,PageNotFound } from "../pages";

export const Allroutes = () => {
  return (
    <>
    <div className="dark:bg-slate-800">

    
    <Routes>
    <Route  path="/" element={<MovieList api={"/now_playing"}/>} />
        <Route  path="/movies/:id" element={<MovieDetail />} />
        <Route  path="/movies/popular" element={<MovieList api={"/popular"}/>} />
        <Route  path="/search" element={<Search api={"/search/movie"}/>} />
        <Route  path="movies/top" element={<MovieList api={"/top_rated"} />} />
        <Route  path="movies/upcoming" element={<MovieList api={"/upcoming"}/>} />
        <Route  path="*" element={<PageNotFound/>} />
    </Routes>
    </div>
    </>
  )
}
