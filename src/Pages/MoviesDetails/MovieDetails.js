// pages/DetailsPage.js
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from '../../components/Navbar/Navbar';
const DetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
};

export default DetailsPage;
