import { useSelector } from 'react-redux';
import './watchList.css'
import CircularProgressBar from '../../components/circularProgressBar/circularProgressBar'; 
// import NoPages from '../NoPages/NoPages';
import  Navbar  from '../../components/Navbar/Navbar';
const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist);

  return (
    <div>
        <Navbar/>
      <h1>Watchlist</h1>
      {watchlist.length > 0 ? (
        <div className="movie-list">
          {watchlist.map(movie => (
            <div key={movie.id} className="movie-card">
              <div className="movie-poster-container">
                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                  className="movie-poster"
                />
                  <div className="movie_rating">
                  <CircularProgressBar percentage={Math.round(movie.vote_average * 10)} />
                </div>
              </div>
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
            </div>
          ))}
        </div>
      ) : (
         <div className='noMovies'>
          
            <h1>No movies added to the watchlist</h1>
            <a href='/'>Back to home</a>
            </div>
      
      )}
    </div>
  );
};

export default Watchlist;
