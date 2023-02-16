import { Home } from '../pages/HomePage/Home';
import { NotFound } from '../pages/NotFoundPage/NotFound';

export const privateRoutes = [
  { path: '/', element: <Home /> },
  { path: '*', element: <NotFound /> },
];
