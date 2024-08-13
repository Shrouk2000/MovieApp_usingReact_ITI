// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// // import './WatchedMovies.css';

// const WatchedMovies = () => {
//   const watched = useSelector(state => state.movies.watched);

//   return (
//     <div className="watched-movies">
//       <h1>Watched Movies</h1>
//       {watched.length > 0 ? (
//         <div className="movie-list">
//           {watched.map(movie => (
//             <div key={movie.id} className="movie-card">
//               <img 
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
//                 alt={movie.title} 
//                 className="movie-poster"
//               />
//               <h2>{movie.title}</h2>
//               <p>{movie.release_date}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>No watched movies</div>
//       )}
//       <Link to="/">Back to Home</Link>
//     </div>
//   );
// };

// export default WatchedMovies;
