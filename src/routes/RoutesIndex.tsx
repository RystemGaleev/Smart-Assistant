import { Home } from '../pages/HomePage/Home';
import { Library } from '../pages/LibraryPage/Library';
import { NotFound } from '../pages/NotFoundPage/NotFound';
import { TaskManager } from '../pages/TaskManagerPage/TaskManager';

export const privateRoutes = [
  { path: '/', element: <Home /> },
  { path: '/taskmanager', element: <TaskManager /> },
  { path: '/library', element: <Library /> },

  { path: '*', element: <NotFound /> },
];
