import { Home } from '../pages/HomePage/Home';
import { Library } from '../pages/LibraryPage/Library';
import { NotFound } from '../pages/NotFoundPage/NotFound';
import { TaskManager } from '../pages/TaskManagerPage/TaskManager';
import { Weather } from '../pages/WeatherPage/Weather';

export const privateRoutes = [
  { path: '*', element: <NotFound /> },
  { path: '/', element: <Home /> },
  { path: '/taskmanager', element: <TaskManager /> },
  { path: '/library', element: <Library /> },
  { path: '/weather', element: <Weather /> },
];
