import VisualCard from '../VisualCard'

export const SearchList = ({ movies }) => {
  // console.log(movies)
  return (
    <>
     {movies.length === 0 && <h3 className='text-light'> Pelicula no encontrada </h3>}
      { movies?.map(movie => (
          <VisualCard key={movie.id} {...movie} />
        ))
      }
    </>
  )
}
