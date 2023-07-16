import { useState, useEffect } from 'react'
import { SearchList } from '@/components/search/SearchList'
import { getMovieByName } from '../components/search/getMovieByName'

import 'bootstrap/dist/css/bootstrap.min.css'
import { useRouter } from 'next/router'

export default function Buscar (props) {

  const router = useRouter()
  const searchValue = router.query.searchValue;
  const [movies, setMovies] = useState([])


  useEffect(() => {
    getMovieByName(searchValue)
      .then(movies => setMovies(movies))
    console.log(movies)
  },
  [searchValue])

  const filteredMovies = movies.filter(movie => movie.poster_path !==null)
  return (
    <>
      <h1 className='m-0 p-2 text-center text-white bg-dark'>Buscar película por nombre</h1>
      <main className='container-fluid  movies__container justify-center'>
        <SearchList movies={filteredMovies} />
      </main>
    </>
  )
}
