import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './Navbar.css';

const NavBar = () => {
  const watchlist = useSelector((state) => state.watchlist);

  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">Movie App</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/watchlist">
              <FaHeart color={watchlist.length > 0 ? 'red' : 'gray'} /> Watchlist
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
