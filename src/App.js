import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import LanguageContext from './context/LanguageContext';

const Home = lazy(() => import('./Pages/Home/Home'));
const SearchPage = lazy(() => import('./Pages/Search/Search'));
const Watchlist = lazy(() => import('./Pages/WatchList/WatchList'));
const HomepageLayout = lazy(() => import('./components/layouts/HomePageLayout'));

const App = () => {
  const [language, setLanguage] = useState("en");

  return (
    <Provider store={store}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomepageLayout />}>
                <Route index element={<Home />} />
                <Route path="/searchPage" element={<SearchPage />} />
                <Route path="/watchlist" element={<Watchlist />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LanguageContext.Provider>
    </Provider>
  );
};

export default App;
