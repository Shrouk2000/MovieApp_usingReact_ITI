import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import SearchPage from './Pages/Search/Search';
import Watchlist from './Pages/WatchList/WatchList';  // Import Watchlist page

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searchPage" element={<SearchPage />} />
      <Route path="/watchlist" element={<Watchlist />} /> {/* Add route for Watchlist */}
    </Routes>
  </Router>
);


export default App;