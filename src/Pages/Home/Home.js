import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../../redux/slices/watchListSlice';
import NavBar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar'; 
import PaginationControls from '../../components/Pagenation/Pagenation'; 
import CircularProgressBar from '../../components/circularProgressBar/circularProgressBar'; 
import './home.css';
import formatDate from '../../components/formatDate/formatDate';

<formatDate/>

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const watchlist = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            api_key: 'f43ec82a5f24fe6190891894b7436c7a',
            page: currentPage
          }
        });
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/searchPage?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleWatchlist = (movie) => {
    if (watchlist.some(watchlistedMovie => watchlistedMovie.id === movie.id)) {
      dispatch(removeFromWatchlist(movie));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  const isMovieInWatchlist = (movie) => {
    return watchlist.some(watchlistedMovie => watchlistedMovie.id === movie.id);
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <NavBar />
      <SearchBar 
        searchQuery={searchQuery} 
        onSearchChange={handleSearchChange} 
        onSearch={handleSearch} 
      />

      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div 
              key={movie.id} 
              className="movie-card" 
              onClick={() => handleMovieClick(movie.id)}
            >
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
              <p>{formatDate(movie.release_date)}</p>
              <div 
                className="movie-heart" 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  toggleWatchlist(movie); 
                }}
              >
                {isMovieInWatchlist(movie) ? (
                  <FaHeart color="red" />
                ) : (
                  <FaRegHeart color="gray" />
                )}
              </div>
            </div>
          ))
        ) : (
          <div>No movies found</div>
        )}
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
