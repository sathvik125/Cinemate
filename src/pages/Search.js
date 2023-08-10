import { useSearchParams } from 'react-router-dom';
import { Card } from '../Components/index'
import { useFetch } from '../hooks/useFetch'
export const Search = ({api}) => {
  const [searchparams]=  useSearchParams();
  const query=searchparams.get("q");
  const url=`https://api.themoviedb.org/3/${api}?api_key=19878d8a960a31b9a9c47b48a56f0fba&query=${query}`;
  const {movies} =useFetch(url);
   return (
     <main>

       <section >
        <div className='text-3xl'>{movies===null ? "No Result found" :`Result for ${query}:`} </div>
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
