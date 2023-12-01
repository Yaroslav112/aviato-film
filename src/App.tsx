import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './modules/global-styles';
import Series from './modules/series';
import Cartoons from './modules/cartoons';
import Movies from './modules/movies';
import TopImdb from './modules/top-imdb';
import NotFound from './library/components/not-found';
import { ROUTES } from './library/constants/routes';
import CustomScroll from '../src/library/components/scroll-bar';

function App() {
  return (
    <CustomScroll>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={ROUTES.MAIN_PAGE} element={<Movies />} />
          <Route path={ROUTES.MOVIES} element={<Movies />} />
          <Route path={ROUTES.SERIES} element={<Series />} />
          {/*<Route path={ROUTES.CARTOONS} element={<Cartoons />} />*/}
          <Route path={ROUTES.TOP_100} element={<TopImdb />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CustomScroll>
  );
}

export default App;
