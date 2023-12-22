import { FC } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Main } from '../components/Pages/Main';
import { Favorites } from '../components/Pages/Favorites/Favorites';

export const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
        </Route>
        <Route
            path="/favorites"
            element={<Favorites/>}
          />
      </Routes>
    </Router>
  );
};
