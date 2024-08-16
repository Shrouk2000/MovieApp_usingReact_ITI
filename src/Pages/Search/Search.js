import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import CircularProgressBar from '../../components/circularProgressBar/circularProgressBar';
import PaginationControls from '../../components/Pagenation/Pagenation';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') || '';

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f43ec82a5f24fe6190891894b7436c7a&query=${encodeURIComponent(query)}`);
          setMovies(response.data.results);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    }
  }, [query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (

    <div className="search-page">
        <Navbar/>
     
      <h1>Search Results for "{query}"</h1>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.id} className="movie-card">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="movie-poster"
              />
               <div className="movie-rating">
                  <CircularProgressBar percentage={Math.round(movie.vote_average * 10)} />
                </div>
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
            </div>
          ))
        ) : (
          <div>No movies found</div>
        )}
      </div>
      <PaginationControls
    
      />
    </div>

  );
};

export default SearchPage;
