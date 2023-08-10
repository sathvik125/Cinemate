import { Card } from '../Components/index'
import { useFetch } from '../hooks/useFetch'
export const MovieList = ({api}) => {
  const url=`https://api.themoviedb.org/3/movie${api}?api_key=19878d8a960a31b9a9c47b48a56f0fba`;
 const {movies} =useFetch(url);
 
  return (
    <main>
      <section >
      <div className='flex justify-start flex-wrap'>
      {movies.map((movie)=>(
        <Card key={movie.id} movie={movie}/>
      ))

      }
    
      </div>
      </section>
    </main>
  )
}
