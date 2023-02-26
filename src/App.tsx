import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppRoutes } from './routes/Routes';
import './assets/sass/App.scss';

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
