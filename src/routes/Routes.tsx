import { Routes, Route, useLocation } from 'react-router-dom';
import { privateRoutes } from './RoutesIndex';
import { AnimatePresence } from 'framer-motion';

export const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {privateRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </AnimatePresence>
  );
};
