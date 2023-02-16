import { Routes, Route } from 'react-router-dom';
import { privateRoutes } from './RoutesIndex';

export const AppRoutes = () => {
  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
