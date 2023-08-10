import  { useEffect, useState } from 'react'
export const useFetch = (url) => {
const [movies,setmovies]=useState([]);
// const furl=`${url}&query=${query}`;
  useEffect(()=>{
    async function fetchmovies(){
      const response=await fetch(url);
      const data= await response.json();
      setmovies(data.results);
    }
    fetchmovies();
  },[url])
  return {movies};
}
