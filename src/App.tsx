import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.className = '';
      document.documentElement.classList.add(theme);
    }
  }, []);
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
