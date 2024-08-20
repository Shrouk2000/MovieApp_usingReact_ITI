import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './movieDetails.css';
import CircularProgressBar from '../../components/circularProgressBar/circularProgressBar';
import StarRating from '../../components/startRating/startReting';
import formatDate from '../../components/formatDate/formatDate';

const formatRuntime = (minutes) => {
  return `${minutes} Min`;
};
<formatDate/>
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: 'f43ec82a5f24fe6190891894b7436c7a'
          }
        });
        setMovie(movieResponse.data);

        const recommendationsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
          params: {
            api_key: 'f43ec82a5f24fe6190891894b7436c7a'
          }
        });
        setRecommendations(recommendationsResponse.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
console.log(movie);
  return (
    <div className="movie-details-container">
      {movie && (
        <div className="movie-details">
          <div className="movie-content">
            <div className="movie-poster">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
              />
            </div>
            <div className="movie-info">
              <h1>{movie.title}</h1>
              <p>{formatDate(movie.release_date)}</p>
              <StarRating rating={movie.vote_average} />
              <span className="vote-count">{movie.vote_count}</span>

              <p>{movie.overview}</p>
              <p className='duration'>Duration: {formatRuntime(movie.runtime)}</p>
              <p className='languages'>Languages: {movie.original_language}</p>
              <div className="genres">
                {movie.genres.length > 0 ? (
                  movie.genres.map(genre => (
                    <button key={genre.id} className="genre-button">
                      {genre.name} 
                    </button>
                  ))
                ) : (
                  <div>No genres available</div>
                )}
              </div>
              <div className="production-companies">
                
                
                <img src={`https://image.tmdb.org/t/p/w500${movie.production_companies[0]?.logo_path}`} className='logo' alt=''/>
                
              </div>
            </div>
          </div>
          <div className="recommendations-container">
            <h2>Recommendations:</h2>
            <div className="recommendations">
              {recommendations.length > 0 ? (
                recommendations.map(rec => (
                  <div key={rec.id} className="recommendation-card">
                    <img 
                      src={`https://image.tmdb.org/t/p/w500${rec.poster_path}`} 
                      alt={rec.title}
                    />
                    <div className='movie_rating circular'>
                    <CircularProgressBar percentage={Math.round(rec.vote_average * 10)} />
                    </div>
                    <p>{rec.title}</p>
                    <p>{formatDate(rec.release_date)}</p>
                    
                   
                  </div>
                ))
              ) : (
                <div>No recommendations available</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
